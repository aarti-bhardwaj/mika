<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * ExpertSpecializationService Entity
 *
 * @property int $id
 * @property int $expert_id
 * @property int $expert_specialization_id
 * @property int $specialization_service_id
 * @property string $price
 * @property string $description
 * @property \Cake\I18n\FrozenTime $created
 * @property \Cake\I18n\FrozenTime $modified
 * @property int $duration
 *
 * @property \App\Model\Entity\Expert $expert
 * @property \App\Model\Entity\ExpertSpecialization $expert_specialization
 * @property \App\Model\Entity\SpecializationService $specialization_service
 */
class ExpertSpecializationService extends Entity
{

    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'expert_id' => true,
        'expert_specialization_id' => true,
        'specialization_service_id' => true,
        'price' => true,
        'description' => true,
        'created' => true,
        'modified' => true,
        'duration' => true,
        'expert' => true,
        'expert_specialization' => true,
        'specialization_service' => true
    ];
}
