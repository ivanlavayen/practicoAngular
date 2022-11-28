import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{Book}from '../book-list/Book';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss']
})
export class InputQuantityComponent implements OnInit {

  constructor() { 

  }
  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
    quantityChange: EventEmitter<number> = new EventEmitter<number>()

  @Output()
  maxReached:  EventEmitter<string> = new EventEmitter<string>()


  ngOnInit(): void {
  }
  
  addTochart():void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    
    }
    else
      this.maxReached.emit("Recuerde!!!su compra no puede superar 5 un.por item");
 
 }
 
 lessTochart():void{
   if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }
 }
 changeQuantity(event: { key: any; }):void{
  console.log(event.key);
  this.quantityChange.emit(this.quantity)
 }
}
