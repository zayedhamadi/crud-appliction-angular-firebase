import { Component, OnInit } from '@angular/core';

import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import { Md5 } from 'ts-md5/dist/cjs/md5';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {}
  Username = '';
  Password = '';
  errorMsg = '';
  Last_Name = '';
  Email = '';
  emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  login() {
    if (this.Last_Name.trim().length == 0) {
      this.errorMsg = 'Le nom de famille est requis';
    } else if (this.Username.trim().length == 0) {
      this.errorMsg = 'Le prenom de famille est requis';
    } else if (!this.emailRegex.test(this.Email)) {
      this.errorMsg =
        'Une adresse e-mail est requis et doit contenir le symbole "@" pour être considérée comme valide ';
    } else if (this.Password.trim().length == 0) {
      this.errorMsg = 'Mot de passe est requis ';
    } else {
      this.errorMsg = ' ';
      let res = this.auth.login(
        this.Username,
        this.Password,
        this.Last_Name,
        this.Email
      );
      if (res == 200) {
        this.route.navigate(['ListParticipant']);
        localStorage.setItem('connected', 'true');
      } else if (res == 404) {
        this.errorMsg = ' Les informations d identification invalides';
      }
    }
  }
  visible: boolean = true;
  changetype: boolean = true;

  view() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  ngOnInit(): void {
    if (localStorage.getItem('connected') == 'true') {
      localStorage.setItem('connected', 'false');
    }
  }
  message: any;
  encrypt(): void {
    try {
      this.Password = Md5.hashStr(this.Password).toString();
      console.log(this.Password);
    } catch (error: any) {
      this.errorMsg = 'Error encrypting password: ' + error.message;
    }
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
