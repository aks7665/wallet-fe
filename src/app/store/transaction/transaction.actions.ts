import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../models/transaction.model';

export const loadingTransactions = createAction(
  '[Transaction/Loading] Loading Transactions'
);
export const loadTransactions = createAction(
  '[Transaction/Load All] Load Transactions',
  props<{ transaction: Transaction[] }>()
);

export const addTransaction = createAction(
  '[Transaction/Effect] Add Transaction',
  props<{ transaction: Partial<Transaction> }>()
);
export const addTransactionFailure = createAction(
  '[Transaction/Error] Add Transaction Failure',
  props<{ error: string }>()
);
export const addTransactionSuccess = createAction(
  '[Transaction/Success] Add Transaction Success',
  props<{ transaction: Transaction }>()
);
