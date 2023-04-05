import { Component, OnInit } from '@angular/core';

import { Participant } from '../participant';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
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
  }
  ngOnInit(): void {
    if (localStorage.getItem('connected') != 'true') {
      this.route.navigate(['/login']);
      console.log('hi');
    }
  }

  onSubmit() {
    this.ParticipantService.CreateParticipant(this.ParticipantForm.value);
    alert('done');
    this.route.navigate(['/ListParticipant']);
  }
  errorMsg = 'Une adresse e-mail est requis et doit contenir le symbole "@" pour être considérée comme valide ';
Email = '';
  emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
}
