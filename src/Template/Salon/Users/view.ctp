<?php
/**
  * @var \App\View\AppView $this
  * @var \App\Model\Entity\App\Model\Entity\User $user
  */
$name = [$user->first_name,$user->last_name];
?>
<?= $this->Html->css('plugins/dataTables/datatables.min.css') ?>
<!-- <div class="users view large-9 medium-8 columns content"> -->
<div class = 'row'>
    <div class = 'col-lg-12'>
    <div class="ibox float-e-margins">
        <div class="ibox-title">
            <h2><?= h(implode(" ", $name)) ?></h2>
        </div> <!-- ibox-title end-->
        <div class="ibox-content">
        <?php if($user->role_id == 3){?>
        <div class="panel-heading">
            <div class="panel-options">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#tab-1">Profile</a></li>
                    <li class=""><a data-toggle="tab" href="#tab-2">Appointments</a></li>
                </ul>
            </div>
        </div>
        <div class="panel-body">
            <div class="tab-content">
                <div id="tab-1" class="tab-pane active">
                    <table class="table">
                        <tr>
                            <th scope="row"><?= __('First Name') ?></th>
                            <td><?= h($user->first_name) ?></td>
                        </tr>
                        <tr>
                            <th scope="row"><?= __('Last Name') ?></th>
                            <td><?= h($user->last_name) ?></td>
                        </tr>
                        <tr>
                            <th scope="row"><?= __('Email') ?></th>
                            <td><?= h($user->email) ?></td>
                        </tr>
                        <tr>
                            <th scope="row"><?= __('Phone') ?></th>
                            <td><?= h($user->phone) ?></td>
                        </tr>
                        <tr>
                            <th scope="row"><?= __('Role') ?></th>
                            <td><?=  h($user->role->label) ?></td>
                        </tr>
                    </table> <!-- table end-->
                </div>
                <div id="tab-2" class="tab-pane">
                    <?php if(!empty($appointments)){ ?>
                            <div class = "ibox-content">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover dataTables" >
                                        <thead>
                                            <tr>
                                                <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                                                <th scope="col"><?= h('Expert Name') ?></th>
                                                <th scope="col"><?= h('Services') ?></th>
                                                <th scope="col"><?= h('Transaction Amount') ?></th>
                                                <th scope="col"><?= h('Rating') ?></th>
                                                <th scope="col"><?= h('Review') ?></th>
                                                <th scope="col"><?= h('Appointment From') ?></th>
                                                <th scope="col"><?= h('Appointment To') ?></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach ($appointments as $key => $value){ ?>
                                            <tr>
                                                <td><?= ($key + 1) ?></td>
                                                <td><?= h($getUserExpert[$value->id]->first_name. ' '.$getUserExpert[$value->id]->last_name) ?></td>
                                                <td><?= h(isset($services[$value->id]))?($services[$value->id]):'-' ?></td>
                                                <td><?= h(isset($transactionAmount[$value->id]->transaction_amount))?($transactionAmount[$value->id]->transaction_amount):'-' ?></td>
                                                <td><?= h(isset($value->appointment_review['rating']))?($value->appointment_review['rating']):'-' ?></td>
                                                <td><?= h(isset($value->appointment_review['review']))?($value->appointment_review['review']):'-' ?></td>
                                                <td><?= h(isset($getAppointmentAvailability[$value->id]->available_from)?($getAppointmentAvailability[$value->id]->available_from):'-') ?></td>
                                                <td><?= h(isset($getAppointmentAvailability[$value->id]->available_to)?($getAppointmentAvailability[$value->id]->available_to):'-') ?></td>
                                            </tr>
                                            <?php } ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    <?php    }else{ ?>
                        <div class="col-lg-12 text-center">
                        No Record Found
                        </div>
                    <?php    }?>
                </div>
            </div>
        </div>
    <?php }else{?>
    <table class="table">
        <tr>
            <th scope="row"><?= __('First Name') ?></th>
            <td><?= h($user->first_name) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Last Name') ?></th>
            <td><?= h($user->last_name) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Email') ?></th>
            <td><?= h($user->email) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Phone') ?></th>
            <td><?= h($user->phone) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Role') ?></th>
            <td><?=  h($user->role->label) ?></td>
        </tr>
    </table> <!-- table end-->
    <?php } ?>
    <div class="row">
        <div class="col-lg-12 text-center">
            <?= $this->Html->link('Back',$this->request->referer(),['class' => ['btn', 'btn-warning']]);?>
        </div>
    </div>
    </div> <!-- ibox-content end -->
    </div> <!-- ibox end-->
    </div><!-- col-lg-12 end-->
</div> <!-- row end-->
<?= $this->Html->script('plugins/dataTables/datatables.min.js') ?>
<script>
    $(document).ready(function(){    
        $('.dataTables').DataTable({
            dom: '<"html5buttons"B>lTfgitp',
            buttons: [
                { extend: 'copy'},
                {extend: 'csv'},
                {extend: 'excel', title: 'ExampleFile'},
                {extend: 'pdf', title: 'ExampleFile'},

                {extend: 'print',
                 customize: function (win){
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                                .addClass('compact')
                                .css('font-size', 'inherit');
                }
                }
            ]
        });

    });
</script>