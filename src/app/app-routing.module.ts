import { NgModule } from '@angular/core';
import { FormullaireComponent } from './formullaire/formullaire.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { FormateurComponent } from './formateur/formateur.component';
import { PresenceComponent } from './presence/presence.component';
import { MarhbaComponent } from './marhba/marhba.component';
import { WelcommeComponent } from './welcomme/welcomme.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Accueil', component: AccueilComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'ListParticipant', component: ListParticipantComponent },
  { path: 'login/formaulaire_Participant', component: FormullaireComponent },
  { path: 'formateur', component: FormateurComponent },
  { path: 'Presence', component: PresenceComponent },
  { path: 'Welcome', component: MarhbaComponent },
  { path: 'profile', component: WelcommeComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
