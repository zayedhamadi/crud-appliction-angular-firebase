import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListParticipantComponent } from './list-participant/list-participant.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HeaderComponent } from './header/header.component';
import { EditParticipantComponent } from './edit-participant/edit-participant.component';
import { FormullaireComponent } from './formullaire/formullaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormateurComponent } from './formateur/formateur.component';
import { DetailsFormateurComponent } from './details-formateur/details-formateur.component';
import { PresenceComponent } from './presence/presence.component';
import { MapsComponent } from './maps/maps.component';
import { WelcommeComponent } from './welcomme/welcomme.component';
import { MarhbaComponent } from './marhba/marhba.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    FormulaireComponent,
    ListParticipantComponent,
    HeaderComponent,
    EditParticipantComponent,
    FormullaireComponent,
    NavbarComponent,
    SideNavComponent,
    FormateurComponent,
    DetailsFormateurComponent,
    PresenceComponent,

    MapsComponent,
    WelcommeComponent,
    MarhbaComponent,
  ],
  imports: [
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
