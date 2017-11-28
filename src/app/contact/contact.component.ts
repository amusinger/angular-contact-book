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
      this.rForm = fb.group({
        'name' : [null, Validators.required],
        'phone' : [null, Validators.required],
        'email' : [null],
        'organisation' : [null],
        'avatar' : [null]  
      });
     }

     changePerson(user){
       user.id = this.profile.id;
      this.profile = this.contactService.changePerson(user);
      console.log(this.profile);
     }



ngOnInit() {
  console.log(this.route);
  this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; 
    console.log(this.id);
    this.profile = this.contactService.getPerson(this.id as string)
      
    
 });
}
ngOnDestroy() {
  this.sub.unsubscribe();
}

}
