import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livre-add-exemplaire',
  templateUrl: './livre-add-exemplaire.component.html',
  styleUrls: ['./livre-add-exemplaire.component.css']
})
export class LivreAddExemplaireComponent implements OnInit {

  formExemplaire = new FormGroup ({
    id_livre: new FormControl(),
    actif: new FormControl()
  });

  constructor(
    public api: ApiService,
    private location: Location
    ) { }

  ngOnInit() {
  }

  onClickSubmit(data){
    this.api.addExemplaire(data.id_livre, data.actif);
  }

  goBack(): void {
    this.location.back();
  }

}
