import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Contact } from './contact';
import { contacts } from './start-contacts';


@Injectable()
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
   return of(contacts);
  }

  getPerson(id: string): Contact{
      var u = Number(id);
      for(let i of contacts){
          if(i.id == u){
              return i;
          }
      }  
  }

  changePerson(user: Contact){
      var d = user.id;
      for(let i:number; i<contacts.length; i++){
        if(contacts[i].id == d){
            contacts[i] = user;     
        }
    }  
  }
}