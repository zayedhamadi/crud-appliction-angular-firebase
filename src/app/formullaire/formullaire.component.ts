import { Component, Directive, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../participant';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators,FormsModule ,FormControl, FormGroup } from '@angular/forms';

import { Injectable, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule],
  // ...
})
export class AppModule {}

@Component({
  selector: 'app-formullaire',
  templateUrl: './formullaire.component.html',
  styleUrls: ['./formullaire.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class FormullaireComponent implements OnInit {
  public ParticipantForm: FormGroup;
  form: any;
  constructor(
    private route: Router,
    public FormBuilder: FormBuilder,
    public ParticipantService: AuthService
  ) {
    this.ParticipantForm = this.FormBuilder.group({
    id: [''],
    nom: [''],
    prenom: [''],
    CIN: [''],
    Direction: [''],
    Entreprise: [''],
    telephone: [''],
    email: [''],
    cycle: [''],
  });
} errorMsg = 'Une adresse e-mail est requis et doit contenir le symbole "@" pour être considérée comme valide ';


Email = '';
  emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


  ngOnInit(): void {}

  submit() {
    this.ParticipantService.CreateParticipant(this.ParticipantForm.value);
    alert('done');
   
  }
  map() {
    window.open(
      "https://www.google.com/maps/place/Centre+National+de+l'Informatique+(CNI)+-+المركز+الوطني+للإعلامية%E2%80%AD/@36.8126789,10.1659944,324m/data=!3m1!1e3!4m6!3m5!1s0x12fd3386aae7a5f9:0x48d6f4f6afb7d57!8m2!3d36.8126965!4d10.1658505!16s%2Fg%2F1pzvrmj9c"
    );
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
