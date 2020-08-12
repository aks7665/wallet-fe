import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { NgForm } from '@angular/forms';
import { isTransactionLoading } from 'src/app/store/transaction/transaction.selectors';
import { Transaction } from 'src/app/models/transaction.model';
import { addTransaction } from 'src/app/store/transaction/transaction.actions';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent implements OnInit {

  loading = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(isTransactionLoading)).subscribe(status => this.loading = status );
  }

  onSubmitTransaction(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const transaction: Partial<Transaction> = form.value;
    this.store.dispatch(addTransaction({ transaction }));
  }

}
