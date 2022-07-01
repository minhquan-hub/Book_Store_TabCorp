import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpService } from './http.service'
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpService, private tokenStorageService: TokenStorageService) {}

  public getAllBooks(): Observable<any> {
    return this.http.GET('/book', '');
  }

  public getBookById(id: string): Observable<any> {
    return this.http.GET(`/book/${id}`, this.tokenStorageService.getToken());
  }

  public createBook(data: any): Observable<any> {
    return this.http.POST('/book',data,this.tokenStorageService.getToken());
  }

  public updateBook(id: string, data: any): Observable<any> {
    return this.http.PUT(`/book/${id}`, data, this.tokenStorageService.getToken());
  }

  public deleteBook(id: string): Observable<any> {
    return this.http.DELETE(`/book/${id}`, this.tokenStorageService.getToken());
  }
}
