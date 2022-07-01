import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public POST(url: string, data: any, token: any) {
    return this.http.post(this.baseUrl + url, data, this.addToken(token));
  }

  public GET(url: string, token:any) {
    return this.http.get(this.baseUrl + url, this.addToken(token));
  }

  public PUT(url: string, data: any, token: any) {
    return this.http.put(this.baseUrl + url, data, this.addToken(token));
  }


  public DELETE(url: string, token: any) {
    return this.http.delete(this.baseUrl + url, this.addToken(token));
  }
  public addToken(token: any) {
    const header = new HttpHeaders().set('Authorization', `Bearer ${token}`); // may be localStorage/sessionStorage
    return { headers: header };
  }

}
