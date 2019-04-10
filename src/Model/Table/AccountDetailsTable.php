<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * AccountDetails Model
 *
 * @property \App\Model\Table\UserSalonsTable|\Cake\ORM\Association\BelongsTo $UserSalons
 * @property |\Cake\ORM\Association\BelongsTo $StripeBankAccounts
 * @property |\Cake\ORM\Association\BelongsTo $StripeCustomers
 *
 * @method \App\Model\Entity\AccountDetail get($primaryKey, $options = [])
 * @method \App\Model\Entity\AccountDetail newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\AccountDetail[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\AccountDetail|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\AccountDetail patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\AccountDetail[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\AccountDetail findOrCreate($search, callable $callback = null, $options = [])
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class AccountDetailsTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('account_details');
        $this->setDisplayField('id');
        $this->setPrimaryKey('id');

        $this->addBehavior('Timestamp');

        $this->belongsTo('UserSalons', [
            'foreignKey' => 'user_salon_id',
            'joinType' => 'INNER'
        ]);
        $this->belongsTo('StripeBankAccounts', [
            'foreignKey' => 'stripe_bank_account_id',
            'joinType' => 'INNER'
        ]);
        $this->belongsTo('StripeCustomers', [
            'foreignKey' => 'stripe_customer_id',
            'joinType' => 'INNER'
        ]);
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmpty('id', 'create');

        $validator
            ->scalar('account_holder_name')
            ->requirePresence('account_holder_name', 'create')
            ->notEmpty('account_holder_name');

        $validator
            ->scalar('account_number')
            ->requirePresence('account_number', 'create')
            ->notEmpty('account_number');

        $validator
            ->scalar('routing_number')
            ->requirePresence('routing_number', 'create')
            ->notEmpty('routing_number');

        $validator
            ->scalar('account_holder_type')
            ->requirePresence('account_holder_type', 'create')
            ->notEmpty('account_holder_type');

        return $validator;
    }

    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules)
    {
        $rules->add($rules->existsIn(['user_salon_id'], 'UserSalons'));
        // $rules->add($rules->existsIn(['stripe_bank_account_id'], 'StripeBankAccounts'));
        // $rules->add($rules->existsIn(['stripe_customer_id'], 'StripeCustomers'));

        return $rules;
    }
}
