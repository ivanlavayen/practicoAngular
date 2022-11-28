import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'library-cart',
  templateUrl: './library-cart.component.html',
  styleUrls: ['./library-cart.component.scss']
})
export class LibraryCartComponent implements OnInit {
  books$: Observable<Book[]>;
 
  constructor(private cart:BookCartService) { 
    this.books$=cart.buyList.asObservable();
  }
  
  ngOnInit(): void {
  }
  
  cancelCart(book: Book): void{
    this.cart.cancelCart(book);
    
  }

}
