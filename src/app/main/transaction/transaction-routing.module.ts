import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionResolver } from '../../resolvers/transaction.resolver';

const routes: Routes = [
  {
    path: '',
    component: TransactionListComponent,
    resolve: {
      transactions: TransactionResolver
    }
  },
  {
    path: 'add',
    component: TransactionAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
