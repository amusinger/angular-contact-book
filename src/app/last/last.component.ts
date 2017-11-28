import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {

  constructor(private s: ContactService) { }
values
  ngOnInit() {
this.s.getCalled().subscribe(data=>this.values = data);
  }

}
