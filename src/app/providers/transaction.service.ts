import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private apiService: ApiService) {}

  baseUrl = '/transactions';

  fetchAllTransaction = () => {
    const url = `${this.baseUrl}`;
    return this.apiService.getDataApi(url);
  }

  addTransaction = (data) => {
    const url = `${this.baseUrl}`;
    return this.apiService.postDataApi(data, url);
  }
}
