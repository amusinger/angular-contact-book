import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Contact } from './contact';


@Injectable()
export class HeroService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
   return null;
  }
}