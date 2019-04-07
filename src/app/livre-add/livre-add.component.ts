import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livre-add',
  templateUrl: './livre-add.component.html',
  styleUrls: ['./livre-add.component.css']
})
export class LivreAddComponent implements OnInit {

  formLivre = new FormGroup ({
    titre: new FormControl(),
    auteur: new FormControl(),
    edition: new FormControl()
  });

  constructor(
    public api: ApiService,
    private location: Location
    ) { }

  ngOnInit() {
  }

  onClickSubmit(data){
    this.api.addLivre(data.titre, data.auteur, data.edition);
  }

  goBack(): void {
    this.location.back();
  }

}
