<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * SpecializationService Entity
 *
 * @property int $id
 * @property string $name
 * @property string $label
 * @property int $specialization_id
 * @property bool $status
 * @property \Cake\I18n\FrozenTime $created
 * @property \Cake\I18n\FrozenTime $modified
 *
 * @property \App\Model\Entity\Specialization $specialization
 * @property \App\Model\Entity\ExpertSpecializationService[] $expert_specialization_services
 */
class SpecializationService extends Entity
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
        'name' => true,
        'label' => true,
        'specialization_id' => true,
        'status' => true,
        'created' => true,
        'modified' => true,
        'specialization' => true,
        'expert_specialization_services' => true
    ];
}
