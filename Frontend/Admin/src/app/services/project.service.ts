import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoaderService } from '../loader/loader.service';

const API_ENDPOINT = `${environment.apiUrl}/api/project`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient,private loaderService: LoaderService) {}

  get(): Observable<any> {
    this.loaderService.setLabel('Getting Projects')
    return this.http.get(`${API_ENDPOINT}/get/`, httpOptions);
  }
 

  getById(id: string): Observable<any> {
    this.loaderService.setLabel('Getting the selected project')
    return this.http.get(`${API_ENDPOINT}/get/${id}`);
  }

  
  update(id: string, project: any): Observable<any> {
    return this.http.put(`${API_ENDPOINT}/update-project/${id}`,project);
  }

  create( project: any): Observable<any> {

    return this.http.post(`${API_ENDPOINT}/create-project/`,project);
  }
  saveImage( file: any, id:string, change:boolean): Observable<any> {

    return this.http.put(`${API_ENDPOINT}/save-image/${id}/${change}`,file);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${API_ENDPOINT}/delete-project/${id}`);
  }
  changeState(id: string, project: any): Observable<any> {
    return this.http.put(`${API_ENDPOINT}/state-change/${id}`,project);
  }

 
 

}
