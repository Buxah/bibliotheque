import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  formClient = new FormGroup ({
    nom: new FormControl(),
    prenom: new FormControl(),
    date_naissance: new FormControl(),
    email: new FormControl()
  });

  
  constructor(
    public api: ApiService,
    private location: Location
    ) { }

  ngOnInit() {
  }

  onClickSubmit(data){
    this.api.addClient(data.nom, data.prenom, data.date_naissance, data.email);
  }

  goBack(): void {
    this.location.back();
  }

}
