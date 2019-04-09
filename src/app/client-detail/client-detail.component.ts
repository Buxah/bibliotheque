import { Component, OnInit } from '@angular/core';
import { EditService } from '../edit.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EmpruntService } from '../emprunt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  public display: any;
  showMsg: boolean = false;
  
  formClient = new FormGroup ({
    id_client: new FormControl(),
    nom: new FormControl(),
    prenom: new FormControl(),
    date_naissance: new FormControl(),
    email: new FormControl()
  });

  constructor(
    public edit: EditService,
    public emprunt: EmpruntService,
    public router: Router
  ) {}
  

  ngOnInit() {
    this.display=this.edit.get_client();
    console.log(this.display);
  }

  onClickSubmit(data){
    this.edit.editClient(data.id_client, data.nom, data.prenom, data.date_naissance, data.email);
    this.showMsg = true;
  }

  add_emprunt(id){
    this.emprunt.add_emprunt(id);
  }

}
