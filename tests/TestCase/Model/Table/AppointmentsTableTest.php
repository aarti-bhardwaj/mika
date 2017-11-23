<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\AppointmentsTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\AppointmentsTable Test Case
 */
class AppointmentsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \App\Model\Table\AppointmentsTable
     */
    public $Appointments;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.appointments',
        'app.users',
        'app.roles',
        'app.experts',
        'app.user_salons',
        'app.expert_availabilities',
        'app.expert_cards',
        'app.expert_locations',
        'app.expert_specialization_services',
        'app.expert_specializations',
        'app.specializations',
        'app.specialization_services',
        'app.user_favourite_experts',
        'app.social_connections',
        'app.user_device_tokens',
        'app.user_cards',
        'app.transactions',
        'app.appointment_services'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Appointments') ? [] : ['className' => AppointmentsTable::class];
        $this->Appointments = TableRegistry::get('Appointments', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Appointments);

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
     * Test afterSave method
     *
     * @return void
     */
    public function testAfterSave()
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
