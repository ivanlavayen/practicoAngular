import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { LibraryContactComponent } from './library-contact/library-contact.component';
import { LibraryMainComponent } from './library-main/library-main.component';

const routes: Routes = [
        {
          path:'',
          redirectTo:'principal',
          pathMatch:'full'
        },
  
        {
          path:'principal',
          component:LibraryMainComponent
        },

        {
          path:'acerca',
          component:LibraryAboutComponent
        },

        {
          path:'contacto',
          component:LibraryContactComponent
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
