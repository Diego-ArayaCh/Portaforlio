import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_ENDPOINT = `${environment.apiUrl}/api/contact`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/get/`);
  }
 
  getInfo(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/get-info/`);
  }
  getHeavy(): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/get-heavy/`);
  }

  

  
 


  

  

 
 

}
