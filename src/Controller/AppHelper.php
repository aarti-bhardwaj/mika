<?php
/**
* CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
* Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
*
* Licensed under The MIT License
* For full copyright and license information, please see the LICENSE.txt
* Redistributions of files must retain the above copyright notice.
*
* @copyright Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
* @link      http://cakephp.org CakePHP(tm) Project
* @since     0.2.9
* @license   http://www.opensource.org/licenses/mit-license.php MIT License
*/
namespace App\Controller;
use Cake\ORM\TableRegistry;
use Cake\Log\Log;
use Cake\Network\Exception\NotFoundException;
use Cake\Core\Exception\Exception;

/**
* Application Controller
*
* Add your application-wide methods in the class below, your controllers
* will inherit them.
*
* @link http://book.cakephp.org/3.0/en/controllers.html#the-app-controller
*/
class AppHelper
{

  private static $conversationArray = [
                                "Scheduling_Availabilities" =>[
                                                                "text"=>"Hi, <<expert name>>, Good morning. Would you like to make yourself available on Mika today? Ignore this text to cancel.", 
                                                                "response"=>[
                                                                        [
                                                                            "intent" => ['Yes','Yo','Ya','Yup'],
                                                                            "block_identifier" => "Availability_updated"
                                                                        ],
                                                                        [
                                                                            "intent" => ['No','Na','Nops','N'],
                                                                            "block_identifier" => "Availability_not_updated"
                                                                        ]
                                                                    ]
                                                                    
                                                                ],

                                    "Availability_updated" => [
                                                                "text"=>"Thanks <<expert name>>, for your valuable response. We will update your availability", 
                                                                "response"=>[
                                                                        [
                                                                            "intent" => ['Yes','Yo','Ya','Yup'],
                                                                            "block_identifier" => "Availability_updated"
                                                                        ],
                                                                        [
                                                                            "intent" => ['No','Na','Nops','N'],
                                                                            "block_identifier" => "Availability_not_updated"
                                                                        ]
                                                                    ]
                                                                   
                                                                ],
                                    "Availability_not_updated" => [
                                                                    "text"=>"Hi, <<expert name>>, good morning", 
                                                                "response"=>[
                                                                        [
                                                                            "intent" => ['Yes','Yo','Ya','Yup'],
                                                                            "block_identifier" => "Availability_updated"
                                                                        ],
                                                                        [
                                                                            "intent" => ['No','Na','Nops','N'],
                                                                            "block_identifier" => "Availability_not_updated"
                                                                        ]
                                                                    ]
                                                                ],
                                    "Appointment_booking" => [
                                                                "text"=>"Would you like to confirm an appointment for <<customer name>> for this <<service name>>", 
                                                                "response"=>[
                                                                        [
                                                                            "intent" => ['Yes','Yo','Ya','Yup'],
                                                                            "block_identifier" => "Confirm_booking"
                                                                        ],
                                                                        [
                                                                            "intent" => ['No','Na','Nops','N'],
                                                                            "block_identifier" => "Booking_deny"
                                                                        ]
                                                                    ]
                                                                   
                                                                ],
                                    "Confirm_booking" => [
                                                                "text"=>"Thanks <<expert name>>, for the confirmation. We will inform the customer for your booking accepatance", 
                                                                "response"=>[
                                                                        [
                                                                            "intent" => ['Yes','Yo','Ya','Yup'],
                                                                            "block_identifier" => "Availability_updated"
                                                                        ],
                                                                        [
                                                                            "intent" => ['No','Na','Nops','N'],
                                                                            "block_identifier" => "Availability_not_updated"
                                                                        ]
                                                                    ]
                                                                   
                                                                ],
                                    "Booking_deny" => [
                                                                "text"=>"You deny the booking. We will inform the customer for your denial", 
                                                                "response"=>[
                                                                        [
                                                                            "intent" => ['Yes','Yo','Ya','Yup'],
                                                                            "block_identifier" => "Availability_updated"
                                                                        ],
                                                                        [
                                                                            "intent" => ['No','Na','Nops','N'],
                                                                            "block_identifier" => "Availability_not_updated"
                                                                        ]
                                                                    ]
                                                                   
                                                                ]

                             ];
  
    public function createManyConversation($data){
        $conversations = TableRegistry::get('Conversations');
        $newEntities = $conversations->newEntities($data);

        $patchEntities = $conversations->patchEntities($newEntities,$data);
        
        if ($conversations->saveMany($patchEntities)){
            Log::write('debug','Conversations have been saved ');
            Log::write('debug',$patchEntities);
            return $patchEntities;
        }else{
            throw new Exception("Error Processing Request while saving data.");
        }
        
    }
    public function createSingleConversation($data){
        
        $conversations = TableRegistry::get('Conversations');
        $newEntity = $conversations->newEntity($data);
        
        if ($conversations->save($newEntity)){
            Log::write('debug','Single Conversation has been saved ');
            Log::write('debug',$newEntity);
            return $newEntity;
        }else{
            throw new Exception("Error Processing Request while saving data.");
        }
        
    }

    public function getConversationText($blockIdentifier){

      if(isset(self::$conversationArray[$blockIdentifier])){
        if(isset(self::$conversationArray[$blockIdentifier]['text'])){
          return self::$conversationArray[$blockIdentifier]['text'];
        }else{
          throw new NotFoundException(__('No text found for this Block Identifier.'));  
        }
      } else{
        throw new NotFoundException(__("This block identifier doesn't exist."));
      }   
    }

    public function getNextBlock($blockIdentifier,$intent){
      $conversationResponses = self::$conversationArray[$blockIdentifier]['response'];
      
      foreach ($conversationResponses as $key => $value) {
          
          if(in_array($intent,$value['intent'])){
            $newBlockId =  $value['block_identifier'];
          }else{
            $newBlockId = null;
          }
          if(isset(self::$conversationArray[$newBlockId])){
            if(isset(self::$conversationArray[$newBlockId]['text'])){
              return ['text' => self::$conversationArray[$newBlockId]['text'], 'block_id' => $newBlockId];
            }else{
              throw new NotFoundException(__('No text found for this Block Identifier.'));  
            }
          }
      }  
    }

}
