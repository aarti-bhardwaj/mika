<?php
/**
  * @var \App\View\AppView $this
  */
?>
<div class="row">
    <div class="col-lg-12">
    <!-- <div class="specializationServices index large-9 medium-8 columns content"> -->
        <div class="ibox float-e-margins">
        <div class = 'ibox-title'>
            <h3><?= __('Specialization Services') ?></h3>
        </div>
        <div class = "ibox-content">
                    <table class = 'table' cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                                        <th scope="col"><?= $this->Paginator->sort('id') ?></th>
                                        <th scope="col"><?= $this->Paginator->sort('name') ?></th>
                                        <th scope="col"><?= $this->Paginator->sort('label') ?></th>
                                        <th scope="col"><?= $this->Paginator->sort('specialization_id') ?></th>
                                        <th scope="col"><?= $this->Paginator->sort('status') ?></th>
                                        <th scope="col" class="actions"><?= __('Actions') ?></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($specializationServices as $specializationService): ?>
                        <tr>
                                        <td><?= $this->Number->format($specializationService->id) ?></td>
                                        <td><?= h($specializationService->name) ?></td>
                                        <td><?= h($specializationService->label) ?></td>
                                        <td><?= $specializationService->has('specialization') ? $this->Html->link($specializationService->specialization->name, ['controller' => 'Specializations', 'action' => 'view', $specializationService->specialization->id]) : '' ?></td>
                                        <td><?= h($specializationService->status) ?></td>
                                        <td class="actions">
                                            <?= '<a href='.$this->Url->build(['action' => 'view', $specializationService->id]).' class="btn btn-xs btn-success">' ?>
                                                <i class="fa fa-eye fa-fw"></i>
                                            </a>
                                            <?= '<a href='.$this->Url->build(['action' => 'edit', $specializationService->id]).' class="btn btn-xs btn-warning"">' ?>
                                                <i class="fa fa-pencil fa-fw"></i>
                                            </a>
                                            <?= $this->Form->postLink(__(''), ['action' => 'delete', $specializationService->id], ['confirm' => __('Are you sure you want to delete # {0}?', $specializationService->id), 'class' => ['btn', 'btn-sm', 'btn-danger', 'fa', 'fa-trash-o', 'fa-fh']]) ?>
                                        </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
        </div>
        
        <div class="paginator">
            <ul class="pagination">
                <?= $this->Paginator->first('<< ' . __('first')) ?>
                <?= $this->Paginator->prev('< ' . __('previous')) ?>
                <?= $this->Paginator->numbers() ?>
                <?= $this->Paginator->next(__('next') . ' >') ?>
                <?= $this->Paginator->last(__('last') . ' >>') ?>
            </ul>
            <p><?= $this->Paginator->counter(['format' => __('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')]) ?></p>
        </div>
    <!-- </div> -->
</div><!-- .ibox  end -->
</div><!-- .col-lg-12 end -->
</div><!-- .row end -->
