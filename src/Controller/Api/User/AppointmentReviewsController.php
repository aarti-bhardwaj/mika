<?php
namespace App\Controller\Api\User;

use App\Controller\Api\User\ApiController;
use Cake\Network\Exception\BadRequestException;
use Cake\Network\Exception\MethodNotAllowedException;
use Cake\Network\Exception\NotAllowedException;
use Cake\Core\Exception\Exception;
use Cake\Network\Exception\NotFoundException;
use Cake\Network\Exception\UnauthorizedException;
use Cake\Log\Log;

/**
 * UserFavouriteExperts Controller
 *
 * @property \App\Model\Table\UserFavouriteExpertsTable $UserFavouriteExperts
 *
 * @method \App\Model\Entity\UserFavouriteExpert[] paginate($object = null, array $settings = [])
 */
class AppointmentReviewsController extends ApiController
{
    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        if(!$this->request->is(['post'])){
            throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }

        if(!isset($this->request->data['appointment_id']) || !$this->request->data['appointment_id']){
            throw new MethodNotAllowedException(__('MANDATORY_FIELD_MISSING',"Appointment id"));
        }

        if(!isset($this->request->data['rating']) || !$this->request->data['rating']){
            throw new MethodNotAllowedException(__('MANDATORY_FIELD_MISSING',"Rating"));

        }
        if(!isset($this->request->data['review']) || !$this->request->data['review']){
            throw new MethodNotAllowedException(__('MANDATORY_FIELD_MISSING',"Review"));

        }

        $appointment = $this->AppointmentReviews->Appointments->findById($this->request->data['appointment_id'])->first();

        $data = [
                    'user_id' => $appointment->user_id,
                    'expert_id' => $appointment->expert_id,
                    'appointment_id' => $this->request->data['appointment_id'],
                    'rating' => $this->request->data['rating'],
                    'review' => $this->request->data['review'],
                    'is_approved' => 0,
                    'is_deleted' => 0,
                    'status' => 0,
                    'reviewed_by' => $this->Auth->user('id')
                ];

        $appointmentReview = $this->AppointmentReviews->newEntity();
        $appointmentReview = $this->AppointmentReviews->patchEntity($appointmentReview, $data);
        
        Log::write('debug',$appointmentReview);          
        if (!$this->AppointmentReviews->save($appointmentReview)) {
          if($appointmentReview->errors()){
            $this->_sendErrorResponse($appointmentReview->errors());
          }
          throw new Exception("Error Processing Request");
        }
        
        $success = true;
        
        $this->set('data',$appointmentReview);
        $this->set('status',$success);
        $this->set('_serialize', ['status','data']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Appointment Review id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {

        if(!$this->request->is(['patch', 'post', 'put'])){
            throw new MethodNotAllowedException(__('BAD_REQUEST'));
        }

        $appointmentReview = $this->AppointmentReviews->get($id, [
            'contain' => []
        ]);

        $appointmentReview = $this->AppointmentReviews->patchEntity($appointmentReview, $this->request->getData());

        if (!$this->AppointmentReviews->save($appointmentReview)) {
          
          if($appointmentReview->errors()){
            $this->_sendErrorResponse($appointmentReview->errors());
          }
          throw new Exception("Error Processing Request");
        }
        
        $success = true;
        
        $this->set('data',$appointmentReview);
        $this->set('status',$success);
        $this->set('_serialize', ['status','data']);
    }

}
