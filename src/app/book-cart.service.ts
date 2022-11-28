import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {

  private _buyList: Book[]=[];

  buyList: BehaviorSubject<Book[]>=new BehaviorSubject (this._buyList);

  constructor() { }

  addToCart(book: Book){
    let article: Book= this._buyList.find((v1)=>v1.name==book.name)!;
   
    if (!article){
      this._buyList.push({...book});
    }
      this.buyList.next(this._buyList);
    }

    cancelCart(book: Book){
      let article: Book= this._buyList.find((v1)=>v1.name==book.name)!;
     
      if (article){
        this._buyList.pop();
      }
        this.buyList.next(this._buyList);
      }  
}
