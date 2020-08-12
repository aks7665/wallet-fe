import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as TransactionActions from './transaction.actions';
import { Router } from '@angular/router';
import { TransactionService } from '../../providers/transaction.service';

@Injectable()
export class TransactionEffects {

  addTransaction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TransactionActions.addTransaction),
      concatMap((action) =>
        this.transactionService.addTransaction(action.transaction).pipe(
          map((response) => {
            if (response.status) {
              this.router.navigate(['transaction']);
              return TransactionActions.addTransactionSuccess({ transaction: response.result });
            } else {
              return TransactionActions.addTransactionFailure({
                error: response.message
              });
            }
          }),
          catchError((error) => EMPTY)
        )
      )
    );
  });

  loadingTransactions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TransactionActions.loadingTransactions),
      concatMap((action) =>
        this.transactionService.fetchAllTransaction().pipe(
          map((response) => {
            if (response.status) {
              return TransactionActions.loadTransactions({ transaction: response.result });
            } else {
              return TransactionActions.loadTransactions({ transaction: [] });
            }
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private transactionService: TransactionService,
    private router: Router
  ) { }
}
