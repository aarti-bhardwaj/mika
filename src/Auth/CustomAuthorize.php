<?php
namespace App\Auth;

use Cake\Auth\BaseAuthorize;
use Cake\Network\Request;
use Cake\ORM\TableRegistry;
use Cake\Collection\Collection;
use Cake\Utility\Inflector;
use Firebase\JWT\JWT;
use Cake\Utility\Security;

class CustomAuthorize extends BaseAuthorize{
	
	public function authorize($user, Request $request){
        //setting request parameters
		$this->reqController = $request->params['controller'];
		$this->reqAction = $request->params['action'];
		$this->reqPass = $request->params['pass'];
		$this->reqPrefix = isset($request->params['prefix']) ? $request->params['prefix'] : false;
        $token  = $request->header('Authorization');
        if(!in_array($token, [false, null, ''])){
            $payload = JWT::decode(explode(' ', $token)[1], Security::salt(), array('HS256'));
        }
        $userRole = 'User';
        if(isset($payload->expert_id) && !in_array($payload->expert_id, [false, null, ''])){
          $userRole = 'Expert';
        }
        if(isset($user['role_id']) && $user['role_id'] == 1){
          $userRole = 'Admin';   
        }
        if(!$this->_ignoreRoleAccess($this->reqPrefix)){

            if(!$this->_checkRoleAccess($userRole)){	
                return false;
    		} 
        }
        //Check if user allowed to acces the resource based on his role
        //if acessing a record then check ownership
        if(isset($this->reqPass[0]) && is_numeric($this->reqPass[0]) && in_array($userRole, ['User', 'Expert'])){

            if($this->_checkExemptedLocations($userRole)){
                return true;               
            }
            if(!$this->_checkOwnerShip($user['id'],$userRole, $this->reqPass[0])){
                return false;
            }    
	  	}	

		return true;
	}

    //Use known routes instead of find routes recursively
    private function _getFromKnownRoutes($source, $userRole){
        // pr($userRole);die;
        $knownRoutes = [

            'Expert' => [

                'Appointments' => ['Users','Experts'],
                'Conversations' => ['Users','Experts']
            ],
            'User' => []
        ];

        if(isset($knownRoutes[$userRole][$source])){
            return $knownRoutes[$userRole][$source];
        }

        return false;
    }

    //function to ignore the role Access for common apis for both Expert and Customers
    private function _ignoreRoleAccess($prefix){
        if($prefix){
            $commonApis = [
                'api' => [
                    'Users' => ['addPhone'],
                    'UserDeviceTokens' => ['add','edit'],
                    'SpecializationServices' => ['index'],
                    'ExpertSpecializationServices' => ['view']
                ],
                'api/user' => [
                    'AppointmentBookings' => ['index','view'],
                    'AppointmentReviews' => ['add'],
                    'Users' => ['addCard','deleteCard','listCards','viewCard']
                ]
            ];
            return !$this->_checkUnAuthorized($commonApis[$prefix]);
        }
    } 

	//method to check wether current controller & action matches some list of un authorized controllers 
	private function _checkUnAuthorized($unAuthorizedLocations){
        
		if(isset($unAuthorizedLocations[$this->reqController])){

			if($unAuthorizedLocations[$this->reqController][0] == 'all' || in_array($this->reqAction, $unAuthorizedLocations[$this->reqController])){

				return false;
			}
		}	

		return true;

	}

	 private function _checkRoleAccess($userRole){

        switch ($userRole) {
            case 'Admin':
              
                return true;	

            case 'Expert':
               
                if($this->reqPrefix != 'api'){
            	
                    return false;
                }
                
                return true;

            case 'User':
                if($this->reqPrefix != 'api/user'){
                    return false;
                }

                return true;   

            default:
                return false;
                break;
        }   
    }

    //method to get unauthorized locations for current user based on the resource ownership of the vendor
    private function _checkOwnerShip($targetId, $userRole, $entityId){

        $target = 'Users';
        $associationRoute = $this->_getFromKnownRoutes($this->reqController, $userRole);       
        if(!$associationRoute){
            $associationRoute = $this->_getAssociationRoute($this->reqController, $target, [], []);
        }
        if(!$associationRoute){
            return true;
        }
        if ($associationRoute == $target) {
            if($targetId == $entityId){
                return true;
            }
            return false;

        }elseif ($associationRoute[0] == $target && count($associationRoute) == 1) {
            $direct = true;
            $tableObject = TableRegistry::get($this->reqController);
            $associations = $tableObject->associations();
            $foreignKey = $associations->get($target)->foreignKey();
            $entity = $tableObject->findById($entityId)->where([$foreignKey => $targetId])->first();

        } else{
            $direct = false;
            $pathToModel = $this->_decorateRoute($associationRoute);
            $tableObject = TableRegistry::get($this->reqController);
            $entity = $tableObject->findById($entityId)->matching($pathToModel, function($q) use ($targetId, $target){
                return $q->where([$target.'.id' => $targetId]);
            })->first();
        }

        //Check Vendor OwnerShip
        if(isset($entity) && $entity){
            return true;
        }
        unset($entity);
        //Check Super Admin OwnerShip
           
        return false;
    }

    private function _decorateRoute($associations) {
        // $associations = array_reverse($associations);

        $associationPath = implode('.', array_reverse($associations));
        
        ////For PHP 7.0 only
        // $associations = array_merge_recursive(...array_reverse($associations));
        ////For getting association types
        // $pathToTragetId = '';
        // foreach ($associations['className'] as $key => $value) {

        //  switch ($associations['associationType'][$key]) {
        //      case 'oneToOne':
        //      case 'manyToOne':
        //          $pathToTragetId = $pathToTragetId.'->'.Inflector::underscore(Inflector::singularize($value));
        //          break;
                
        //      case 'oneToMany':
        //      case 'ManyToMany':

        //          $pathToTragetId = $pathToTragetId.'->'.Inflector::underscore($value).'[0]';
        //          // pr($pathToTragetId);die;
        //          break;              
        //      default:
        //          break;
        //  }
        // }
        return $associationPath;
    }

    //Calculates an association route between source and target model
    private function _getAssociationRoute($source, $target, $route, $exclude){
    	
        if($source == $target) {
            return $target;
        }
        
        $tableObject = TableRegistry::get($source);
        
        $entityClass = $tableObject->entityClass();
        $entityClass = (new \ReflectionClass($entityClass))->getShortName();
        //Check if Model Exists or not ($entityClass will equal to 'Entity if no model exists')
        if($entityClass == 'Entity'){
            return false;
        }

        $associations = $tableObject->associations();
        unset($tableObject);
        $array = $associations->keys();
        $source = strtolower($source);
        $target = strtolower($target);
   
        if(!$array){
            return false;
        }

        if(in_array($target, $array)){
            $route[] = $associations->get($target)->name();
            return $route;
        }else{
           
            $exclude[] = $source;
            foreach ($array as $key => $value) {

                if(!in_array($value, $exclude)){
                    $value = $associations->get($value)->name();
                    $check = $this->_getAssociationRoute($value, $target, $route, $exclude);
                    if($check != false){
                        $check[] = $value;
                        return $check;
                    }
                }
            }
            return false;

        }
    }

    private function _checkExemptedLocations($userRole){

        $allowedLocations = [

            'User' => [
                'ExpertProfile' => ['view','todaysAvailabilities'],
                'UserFavouriteExperts' => ['delete'],
                'ExpertSpecializationServices' => ['view'],
                'Users' => ['viewCard']
            ],
            'Expert' => [
                'ExpertSpecializations' => ['edit','delete']
            ]
        ];
      
        return !$this->_checkUnAuthorized($allowedLocations[$userRole]);
    }


}

?>
