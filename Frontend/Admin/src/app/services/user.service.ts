import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoaderService } from '../loader/loader.service';

const API_ENDPOINT = `${environment.apiUrl}/api/user`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient,  public loaderService: LoaderService) {}

  get(): Observable<any> {
    this.loaderService.setLabel('Getting user')
    return this.http.get(`${API_ENDPOINT}/get/`, httpOptions);

  }
 

  getById(id: string): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/get/${id}`);
  }

 

 
 

  
  update(id: string, usuario: any): Observable<any> {
    return this.http.put(`${API_ENDPOINT}/update-profile/${id}`,usuario);
  }
  recovery( form: any): Observable<any> {
    return this.http.put(`${API_ENDPOINT}/recovery-password/`, form);
  }

 
  signup(usuario: any): Observable<any> {
    return this.http.post(`${API_ENDPOINT}/signup`, usuario,httpOptions);
  }
  signIn(usuario: any): Observable<any> {
    this.loaderService.setLabel('Starting session')
    return this.http.post(`${API_ENDPOINT}/signin`, usuario,httpOptions);
  }

}
