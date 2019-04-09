import { Injectable } from '@angular/core';

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

  constructor() { }

  edit_client(id_client, nom, prenom, date_naissance, email){
    this.id_client = id_client; 
    this.nom = nom; 
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.email = email;
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

  get_livre(){
    return {id: this.id_livre, titre: this.titre, auteur: this.auteur, edition: this.edition};
  
  }
}
