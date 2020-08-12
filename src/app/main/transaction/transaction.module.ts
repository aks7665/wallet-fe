import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { SharedModule } from '../../shared/shared.module';
import { TransactionResolver } from 'src/app/resolvers/transaction.resolver';

@NgModule({
  declarations: [TransactionAddComponent, TransactionListComponent],
  imports: [
    CommonModule,
    SharedModule,
    TransactionRoutingModule
  ],
  providers: [
    TransactionResolver
  ]
})
export class TransactionModule { }
