import { Component, OnInit } from '@angular/core';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.css']
})
export class LivreDetailComponent implements OnInit {
  public display: any;

  constructor(
    public edit: EditService
  ) {}
   
  ngOnInit() {
    this.display=this.edit.get_livre();
    console.log(this.display);
  }

}
