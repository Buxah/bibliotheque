import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getClients(){
    return this.http.get('http://localhost:3000/clients');
  }

  addClient(formNom, formPrenom, formDate, formEmail){
    return this.http.post('http://localhost:3000/clientAdd', {
      nom: formNom,
      prenom: formPrenom,
      date_naissance: formDate,
      email: formEmail
    }).subscribe(data => {
      console.log(data);
    });
  }

  

  getLivres(){
    return this.http.get('http://localhost:3000/livres');
  }

  addLivre(formTitre, formAuteur, formEdition){
    return this.http.post('http://localhost:3000/livreAdd', {
      titre: formTitre,
      auteur: formAuteur,
      edition: formEdition
    }).subscribe(data => {
      console.log(data);
    });
  }

  addExemplaire(formId_livre, formActif){
    return this.http.post('http://localhost:3000/exemplaireAdd', {
      id_livre: formId_livre,
      actif: formActif
    }).subscribe(data => {
      console.log(data);
    });
  }
  
}
