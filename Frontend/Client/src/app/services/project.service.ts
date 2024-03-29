import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


const API_ENDPOINT = `${environment.apiUrl}/api/project`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
   
    return this.http.get(`${API_ENDPOINT}/get/`, httpOptions);
  }
  getActive(): Observable<any> {
   
    return this.http.get(`${API_ENDPOINT}/get-active/`, httpOptions);
  }

  getById(id: string): Observable<any> {
    
    return this.http.get(`${API_ENDPOINT}/get/${id}`);
  }

  
  

  
 
  
 
 

}
