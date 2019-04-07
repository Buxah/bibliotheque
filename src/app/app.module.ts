import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { LivresComponent } from './livres/livres.component';
import { LivreAddComponent } from './livre-add/livre-add.component';
import { LivreDetailComponent } from './livre-detail/livre-detail.component';
import { LivreAddExemplaireComponent } from './livre-add-exemplaire/livre-add-exemplaire.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientAddComponent,
    NavBarComponent,
    HeaderComponent,
    ClientDetailComponent,
    LivresComponent,
    LivreAddComponent,
    LivreDetailComponent,
    LivreAddExemplaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
