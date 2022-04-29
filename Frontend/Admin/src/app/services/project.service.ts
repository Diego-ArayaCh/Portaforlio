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
 

  getById(id: string): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/get/${id}`);
  }

  
  update(id: string, project: any): Observable<any> {
    return this.http.put(`${API_ENDPOINT}/update-project/${id}`,project);
  }

  create( project: any): Observable<any> {

    return this.http.post(`${API_ENDPOINT}/create-project/`,project);
  }
  saveImage( file: any, id:string): Observable<any> {

    return this.http.put(`${API_ENDPOINT}/save-image/${id}`,file);
  }
  delete(id: string, project: any): Observable<any> {
    return this.http.put(`${API_ENDPOINT}/delete-project/${id}`,project);
  }
  changeState(id: string, project: any): Observable<any> {
    return this.http.put(`${API_ENDPOINT}/state-change/${id}`,project);
  }

 
 

}