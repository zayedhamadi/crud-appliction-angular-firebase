import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  constructor(private route: Router) {}
  sideNavStatus: boolean = false;
  ngOnInit(): void {
    if (localStorage.getItem('connected') != 'true') {
      this.route.navigate(['/login']);
    }
  }
}
