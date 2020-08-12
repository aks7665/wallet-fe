import { Action, createReducer, on } from '@ngrx/store';
import * as TransactionActions from './transaction.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Transaction } from '../../models/transaction.model';

export const transactionFeatureKey = 'transaction';

// tslint:disable-next-line: no-empty-interface
export interface State { }

export interface State extends EntityState<Transaction> {
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>({
  selectId: data => data._id
});

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
  error: undefined
});

const transactionReducer = createReducer(
  initialState,
  on(TransactionActions.addTransaction, (state, action) => {
    return {
      ...state,
      loading: true,
      error: undefined
    };
  }),
  on(TransactionActions.addTransactionSuccess,
    (state, action) =>
      adapter.addOne(
        action.transaction,
        { ...state, loading: false, loaded: false }
      ),
  ),
  on(TransactionActions.addTransactionFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }),
  on(TransactionActions.loadingTransactions, (state, action) => {
    return {
      ...state,
      loading: true,
      error: undefined,
      loaded: false
    };
  }),
  on(TransactionActions.loadTransactions,
    (state, action) => adapter.addAll(action.transaction, { ...state, loading: false, loaded: true })
  )
);

export const select = adapter.getSelectors(); // Entitity Adapter Selector

export function reducer(state: State | undefined, action: Action) {
  return transactionReducer(state, action);
}
