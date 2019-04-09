import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  public id_client: number;

  constructor(public http: HttpClient) { }

  add_emprunt(id_client){
    this.id_client = id_client; 
  }

  getClient(formId){
    return this.http.post('http://localhost:3000/empruntAdd', {
      id: formId
    }).subscribe(data => {
      console.log(data);
    });
  }

  get_client(){
    return {id: this.id_client};
  
  }

  addEmprunt(formId_client, formId_exemplaire){
    return this.http.post('http://localhost:3000/empruntAdd', {
      id_client: formId_client,
      id_exemplaire: formId_exemplaire
    }).subscribe(data => {
      console.log(data);
    });
  }

  
}
