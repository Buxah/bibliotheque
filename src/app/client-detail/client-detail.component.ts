import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  client: Object;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    const id_client = +this.route.snapshot.paramMap.get('id_client');
    this.apiService.getClientDetail(id_client).subscribe(data => {
      this.client = data;
    });
  }

}
