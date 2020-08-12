import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTransaction from './transaction.reducer';

export const selectTransactionState = createFeatureSelector<fromTransaction.State>(
  fromTransaction.transactionFeatureKey
);

export const isTransactionLoading = createSelector(
  selectTransactionState,
  (state) => state.loading
);

export const isTransactionLoaded = createSelector(
  selectTransactionState,
  (state) => state.loaded
);

export const getTransactionError = createSelector(
  selectTransactionState,
  (state) => state.error
);

export const selectAllTransactions = createSelector(
  selectTransactionState,
  fromTransaction.select.selectAll
);
