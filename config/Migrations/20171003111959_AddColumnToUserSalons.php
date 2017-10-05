<?php
use Migrations\AbstractMigration;

class AddColumnToUserSalons extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-change-method
     * @return void
     */
    public function change()
    {
        $table = $this->table('user_salons');
        $table->addColumn('zipcode', 'string', [
            'default' => null,
            'limit' => 5,
            'null' => false,
        ]);
        $table->update();
    }
}
