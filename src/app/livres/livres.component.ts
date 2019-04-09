import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EditService } from '../edit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres: Object;


  constructor(
    public apiService: ApiService,
    public edit: EditService,
    public router: Router) { }

  ngOnInit() {
    this.apiService.getLivres().subscribe(data => {
      this.livres = data;
    });
  }

  edit_livre(id, titre, auteur, edition){
    this.edit.edit_livre(id, titre, auteur, edition);
  }
}
