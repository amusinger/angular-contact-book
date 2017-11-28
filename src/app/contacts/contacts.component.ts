import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../services/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts: Contact[]
  ngOnInit() {
    this.getContacts();
  }

  getContacts(){
    this.contactService.getContacts().subscribe(data => this.contacts = data);
  }

}
