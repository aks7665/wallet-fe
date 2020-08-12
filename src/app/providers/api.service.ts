import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  postDataApi(data, postURL): Observable<any> {
    return this.http.post<any>(
      environment.apiUrl + postURL,
      data
    );
  }

  getDataApi(postURL): Observable<any> {
    return this.http.get<any>(
      environment.apiUrl + postURL
    );
  }
}
