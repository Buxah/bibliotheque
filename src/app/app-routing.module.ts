import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { LivreAddComponent } from './livre-add/livre-add.component';
import { LivresComponent } from './livres/livres.component';
import { LivreAddExemplaireComponent } from './livre-add-exemplaire/livre-add-exemplaire.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { LivreDetailComponent } from './livre-detail/livre-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/clients', pathMatch: 'full'},
  {path: 'clients', component: ClientsComponent},
  {path: 'client-add', component: ClientAddComponent},
  {path: 'clientDetail', component: ClientDetailComponent},
  {path: 'livres', component: LivresComponent},
  {path: 'livre-add', component: LivreAddComponent},
  {path: 'livre-add-exemplaire', component: LivreAddExemplaireComponent},
  {path: 'livreDetail', component: LivreDetailComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
