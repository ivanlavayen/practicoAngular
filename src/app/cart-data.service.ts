import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/Book';

const URL_API = 'https://637ebd55cfdbfd9a63b66631.mockapi.io/api/v1/bookList';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor(private http: HttpClient) { }
  
  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL_API)
        .pipe(
          tap((books: Book[])=>books.forEach(book=>book.quantity=0)));
           
      
         
  }
}


