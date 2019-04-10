<?php
namespace App\Controller\Api;

use App\Controller\Api\ApiController;
use Cake\Network\Exception\BadRequestException;
use Cake\Network\Exception\MethodNotAllowedException;
use Cake\Core\Exception\Exception;
use Cake\Network\Exception\NotFoundException;

/**
 * ExpertSpecializationServices Controller
 *
 * @property \App\Model\Table\ExpertSpecializationServicesTable $ExpertSpecializationServices
 *
 * @method \App\Model\Entity\ExpertSpecializationService[] paginate($object = null, array $settings = [])
 */
class ExpertSpecializationServicesController extends ApiController
{

    /**
     * Index method
     * Index all the expert specific services
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        if (!$this->request->is(['get'])) {
          throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }
        
        $this->loadModel('Experts');
        $expertId = $this->Experts->findByUserId($this->Auth->user('id'))->first()->id;

        $expertSpecializationServices = $this->ExpertSpecializationServices
                                                ->findByExpertId($expertId)
                                                ->contain(['Experts', 'ExpertSpecializations', 'SpecializationServices'])
                                                ->all();

        $this->set('data',$expertSpecializationServices);
        $this->set('status',true);
        $this->set('_serialize', ['status','data']);
    }

    public function indexAll()
    {
        if (!$this->request->is(['get'])) {
          throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }

        $expertSpecializationServices = $this->ExpertSpecializationServices
                                                ->find()
                                                ->contain(['Experts', 'ExpertSpecializations', 'SpecializationServices'])
                                                ->all();

        $this->set('data',$expertSpecializationServices);
        $this->set('status',true);
        $this->set('_serialize', ['status','data']);
    }

    /**
     * View method
     *
     * @param string|null $id Expert Specialization Service id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        if (!$this->request->is(['get'])) {
          throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }

        $expertSpecializationService = $this->ExpertSpecializationServices->get($id, [
            'contain' => ['Experts', 'ExpertSpecializations.Specializations', 'SpecializationServices']
        ]);

        $this->set('data',$expertSpecializationService);
        $this->set('status',true);
        $this->set('_serialize', ['status','data']);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        if (!$this->request->is(['post'])) {
          throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }
        $data = $this->request->getData();

        $this->loadModel('Experts');
        $expert = $this->Experts->findByUserId($this->Auth->user('id'))
                                ->first();
        
        $this->loadModel('ExpertSpecializations');
        $expertSpecializationId = $this->ExpertSpecializations->find()->where(['expert_id' => $expert['id'],'specialization_id' => $data['specialization_id']])->first()->id;
        

        if(!$expertSpecializationId){
          throw new NotFoundException(__('No entity found in Expert Specializations'));
        }
        
        $data['expert_specialization_id'] = $expertSpecializationId;
        $data['expert_id'] = $expert['id'];

        $expertSpecializationService = $this->ExpertSpecializationServices->newEntity();
    
        $expertSpecializationService = $this->ExpertSpecializationServices->patchEntity($expertSpecializationService, $data);
        if (!$this->ExpertSpecializationServices->save($expertSpecializationService)) {
            throw new Exception("Expert specialization services could not be saved.");
        }
            
        $success = true;
        
        $this->set('data',$expertSpecializationService);
        $this->set('status',$success);
        $this->set('_serialize', ['status','data']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Expert Specialization Service id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    // public function edit($specialization_id, $service_id)
    public function edit($id)
    {
        if (!$this->request->is(['patch', 'post', 'put'])) {
          throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }

        if (!$id) {
            throw new MethodNotAllowedException(__('BAD_REQUEST','Argument id missing.'));
        }

        $this->loadModel('Experts');
        $expertId = $this->Experts->findByUserId($this->Auth->user('id'))
                                  ->first()
                                  ->get('id');

        $expertSpecializationService = $this->ExpertSpecializationServices->findById($id)
                                                                        ->where(['expert_id' => $expertId])
                                                                        ->first();
    
        $expertSpecializationService = $this->ExpertSpecializationServices->patchEntity($expertSpecializationService, $this->request->getData());

        if (!$this->ExpertSpecializationServices->save($expertSpecializationService)) {
            throw new Exception("Expert specialization service edits could not be saved.");
        }

        $this->set('data',$expertSpecializationService);
        $this->set('status',true);
        $this->set('_serialize', ['status','data']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Expert Specialization Service id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    // public function delete($specialization_id, $service_id)
    public function delete($id)
    {
        if (!$this->request->is(['patch', 'post', 'put','delete'])) {
            throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }

        if (!$id) {
            throw new MethodNotAllowedException(__('BAD_REQUEST','Argument id missing.'));
        }
        $this->loadModel('Experts');
        $expertId = $this->Experts->findByUserId($this->Auth->user('id'))
                                  ->first()
                                  ->get('id');

        $expertSpecializationService = $this->ExpertSpecializationServices->findById($id)
                                                                ->where(['expert_id' => $expertId])
                                                                ->first();
  
        if (!$expertSpecializationService) {
            throw new NotFoundException("No service found.");
        }

        if (!$this->ExpertSpecializationServices->delete($expertSpecializationService)) {
            throw new Exception("Expert specialization service could not be deleted.");
        }
        $response = ['status' => true,'message' => 'Expert specialization service has been deleted.'];
        
        $this->set('data',$response);
        $this->set('_serialize', ['data']);
      }
}
