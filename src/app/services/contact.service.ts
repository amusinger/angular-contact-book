import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Contact } from './contact';
import { contacts } from './start-contacts';
import { called } from './called';


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

  addPerson(user: Contact): Contact{
    user.id = contacts.length + 1;
    contacts.push(user);
    return user;
}

  changePerson(user: Contact): Contact{
    var d = user.id;
    for(let i of contacts){
        if(i.id == d){
            i.id = contacts.length + 1;
            i.name = user.name;
            i.email = user.email;
            i.organisation = user.organisation;
            i.avatar = user.avatar;
            contacts.push(i);
            return i;     
        }
    }  
  }

  deletePerson(user: Contact){
    var d = user.id;
    for(let i:number; i<contacts.length; i++){
      if(contacts[i].id == d){
          
          contacts[i] = null;
          console.log('deleted'); 
      }
  } 
 
}
    callPerson(user: Contact){
        called.push(user);
    }

    getCalled(){
        return of(called);
      }
}