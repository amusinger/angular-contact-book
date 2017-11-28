import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../services/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  public profile: Contact;
  id: String;
  private sub: any;

  rForm: FormGroup;
  
  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : [],
      'phone' : [],
      'email' : [],
      'organisation' : [],
      'avatar' : []  
    });
     }

  
ngOnInit() {
  
}

addPerson(user){
 this.profile = this.contactService.addPerson(user);
 if(this.profile){
   console.log('added')
 }

}
}