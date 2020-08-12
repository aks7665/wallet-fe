export interface Transaction {
  _id?: string;
  description: string;
  operation: 'debit' | 'credit';
  amount: number;
  balance: number;
  createdAt?: Date;
  updatedAt?: Date;
}
