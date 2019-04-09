import { Component, OnInit } from '@angular/core';
import { EditService } from '../edit.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.css']
})
export class LivreDetailComponent implements OnInit {
  public display: any;

  formLivre = new FormGroup ({
    id_livre: new FormControl(),
    titre: new FormControl(),
    auteur: new FormControl(),
    edition: new FormControl()
  });

  constructor(
    public edit: EditService
  ) {}
   
  ngOnInit() {
    this.display=this.edit.get_livre();
    console.log(this.display);
  }

  onClickSubmit(data){
    this.edit.editLivre(data.id_livre, data.titre, data.auteur, data.edition);
  }
}
