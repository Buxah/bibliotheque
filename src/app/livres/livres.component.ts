import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  livres: Object;


  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getLivres().subscribe(data => {
      this.livres = data;
    });
  }

}
