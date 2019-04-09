import { Component, OnInit } from '@angular/core';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  public display: any;

  constructor(
    public edit: EditService
  ) {}
   
  ngOnInit() {
    this.display=this.edit.get_client();
    console.log(this.display);
  }

}
