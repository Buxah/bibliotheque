import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  public id_client: number;
  public nom: string;
  public prenom: string;
  public date_naissance: Date;
  public email: string;

  public id_livre: number;
  public titre: string;
  public auteur: string;
  public edition: Date;

  constructor(public http: HttpClient) { }

  edit_client(id_client, nom, prenom, date_naissance, email){
    this.id_client = id_client; 
    this.nom = nom; 
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.email = email;
  }

  editClient(formId, formNom, formPrenom, formDate, formEmail){
    return this.http.post('http://localhost:3000/clientEdit', {
      id: formId,
      nom: formNom,
      prenom: formPrenom,
      date_naissance: formDate,
      email: formEmail
    }).subscribe(data => {
      console.log(data);
    });
  }

  get_client(){
    return {id: this.id_client, nom: this.nom, prenom: this.prenom, date_naissance: this.date_naissance, email: this.email};
  
  }

  edit_livre(id_livre, titre, auteur, edition){
    this.id_livre = id_livre; 
    this.titre = titre; 
    this.auteur = auteur;
    this.edition = edition;
  }

  editLivre(formId, formTitre, formAuteur, formEdition){
    return this.http.post('http://localhost:3000/livreEdit', {
      id: formId,
      titre: formTitre,
      auteur: formAuteur,
      edition: formEdition
    }).subscribe(data => {
      console.log(data);
    });
  }

  get_livre(){
    return {id: this.id_livre, titre: this.titre, auteur: this.auteur, edition: this.edition};
  
  }
}
