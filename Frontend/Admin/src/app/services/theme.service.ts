import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoaderService } from '../loader/loader.service';

const API_ENDPOINT = `${environment.apiUrl}/api/theme`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  get(): Observable<any> {
   
    return this.http.get(`${API_ENDPOINT}/get/`, httpOptions);
  }
 

  getById(id: string): Observable<any> {
    return this.http.get(`${API_ENDPOINT}/get/${id}`);
  }

  saveTheme( id:string, user:any): Observable<any> {
    this.loaderService.setLabel('Saving Theme')
    return this.http.put(`${API_ENDPOINT}/save/${id}`,user);
  }

  
 


  

  

 
 

}
