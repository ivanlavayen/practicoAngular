import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { LibraryContactComponent } from './library-contact/library-contact.component';
import { LibraryMainComponent } from './library-main/library-main.component';
import { LibraryCartComponent } from './library-cart/library-cart.component';
import { FormsModule } from '@angular/forms';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibraryAboutComponent,
    LibraryContactComponent,
    LibraryMainComponent,
    LibraryCartComponent,
    InputQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
