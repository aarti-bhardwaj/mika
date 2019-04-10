<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Specialization Entity
 *
 * @property int $id
 * @property string $name
 * @property string $label
 * @property bool $status
 * @property \Cake\I18n\FrozenTime $created
 * @property \Cake\I18n\FrozenTime $modified
 *
 * @property \App\Model\Entity\ExpertSpecialization[] $expert_specializations
 * @property \App\Model\Entity\SpecializationService[] $specialization_services
 */
class Specialization extends Entity
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
        'status' => true,
        'created' => true,
        'modified' => true,
        'expert_specializations' => true,
        'specialization_services' => true,
        'color' => true
    ];
}
