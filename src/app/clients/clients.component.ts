import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EditService } from '../edit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Object;


  constructor(
    public apiService: ApiService,
    public edit: EditService,
    public router: Router
    ) { }

  ngOnInit() {
    this.apiService.getClients().subscribe(data => {
      this.clients = data;
    });
  }
  
  edit_client(id, nom, prenom, date_naissance, email){
    this.edit.edit_client(id, nom, prenom, date_naissance, email);
  }

  

}
