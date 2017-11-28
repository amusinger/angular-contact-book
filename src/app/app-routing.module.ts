import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TabComponent } from './tab/tab.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TabComponent
      },
      {
        path: 'add', 
        component: AddContactComponent
      },
      {
        path: 'user/:id', 
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
