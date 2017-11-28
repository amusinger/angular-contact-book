import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../services/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public profile: Contact;
  id: String;
  private sub: any;

  rForm: FormGroup;
  
  constructor(private route: ActivatedRoute,
    private contactService: ContactService, private fb: FormBuilder) {
      
     }

  



ngOnInit() {
  console.log(this.route);
  this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; 
    console.log(this.id);
    this.profile = this.contactService.getPerson(this.id as string)
    this.rForm = this.fb.group({
      'name' : [this.profile.name, Validators.required],
      'phone' : [this.profile.phone, Validators.required],
      'email' : [this.profile.email],
      'organisation' : [this.profile.organisation],
      'avatar' : [this.profile.avatar]  
    });
    
 });
}
ngOnDestroy() {
  this.sub.unsubscribe();
}

changePerson(user){
  user.id = this.profile.id;
 this.profile = this.contactService.changePerson(user);
 console.log('changed');
 console.log(this.profile);
}

deleteContact(user){
 this.contactService.deletePerson(user);
}


callPerson(user){
  this.contactService.callPerson(user);
 }


}
