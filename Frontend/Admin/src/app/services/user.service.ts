import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const BLOG_API_ENDPOINT = `${environment.apiUrl}/api/user`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(`${BLOG_API_ENDPOINT}/get/`, httpOptions);
  }
 

  getById(id: string): Observable<any> {
    return this.http.get(`${BLOG_API_ENDPOINT}/get/${id}`);
  }

 

 
 

  
  editProfile(id: string, usuario: any): Observable<any> {
    return this.http.put(`${BLOG_API_ENDPOINT}/update-profile/${id}`,usuario);
  }

 
  signup(usuario: any): Observable<any> {
    return this.http.post(`${BLOG_API_ENDPOINT}/signup`, usuario,httpOptions);
  }
  signIn(usuario: any): Observable<any> {
    return this.http.post(`${BLOG_API_ENDPOINT}/signin`, usuario,httpOptions);
  }

}
