<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\ExpertSpecializationsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\ExpertSpecializationsTable Test Case
 */
class ExpertSpecializationsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\ExpertSpecializationsTable
     */
    public $ExpertSpecializations;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.expert_specializations',
        'app.experts',
        'app.users',
        'app.roles',
        'app.social_connections',
        'app.user_salons',
        'app.expert_availabilities',
        'app.appointments',
        'app.expert_specialization_services',
        'app.specialization_services',
        'app.specializations',
        'app.services',
        'app.appointment_transactions',
        'app.charges',
        'app.expert_cards',
        'app.expert_locations'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('ExpertSpecializations') ? [] : ['className' => ExpertSpecializationsTable::class];
        $this->ExpertSpecializations = TableRegistry::get('ExpertSpecializations', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->ExpertSpecializations);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
