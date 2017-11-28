import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TabComponent
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
