import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BookCartService } from '../book-cart.service';
import { CartDataService } from '../cart-data.service';
import { Book } from './Book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  books: Book[] = [];

  constructor(
    private cart: BookCartService, 
    private bookData: CartDataService) { 

  }
 
  ngOnInit(): void {
    this.bookData.getAll()
      .subscribe(books => this.books= books);
  }

  maxReached(m: string){
    alert(m);
  }

  addToCart(book: Book): void{
    this.cart.addToCart(book);
    book.quantity=0;
  }

}
