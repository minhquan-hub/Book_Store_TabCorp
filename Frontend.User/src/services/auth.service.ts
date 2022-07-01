import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  public register(data: any): Observable<any> {
    return this.http.POST('/user', data, '');
  }

  public login(data: any): Observable<any> {
    return this.http.POST('/auth', data,'');
  }
}
