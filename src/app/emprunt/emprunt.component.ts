import { Component, OnInit } from '@angular/core';
import { EmpruntService } from '../emprunt.service';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {
  showMsg: boolean = false;
  display: any;
  
  formEmprunt = new FormGroup ({
    id_client: new FormControl(),
    id_exemplaire: new FormControl()
  });
  

  constructor(
    public emprunt: EmpruntService,
    private location: Location
  ) { }

  ngOnInit() {
    this.display=this.emprunt.get_client();
    console.log(this.display);
  }

  onClickSubmit(data){
    this.emprunt.addEmprunt(data.id_client, data.id_exemplaire);
    this.showMsg = true;
  }

  goBack(): void {
    this.location.back();
  }
}
