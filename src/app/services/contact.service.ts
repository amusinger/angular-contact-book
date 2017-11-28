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
}