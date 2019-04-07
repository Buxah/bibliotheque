import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Object;


  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getClients().subscribe(data => {
      this.clients = data;
    });
  }
  

}
