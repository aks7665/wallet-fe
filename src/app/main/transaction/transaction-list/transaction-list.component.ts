import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction.model';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectAllTransactions } from 'src/app/store/transaction/transaction.selectors';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions$: Observable<Transaction[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.transactions$ = this.store.pipe(select(selectAllTransactions));
  }

}
