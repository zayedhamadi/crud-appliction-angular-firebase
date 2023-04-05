import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hero, HEROES } from '../formateur';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css'],
})
export class FormateurComponent implements OnInit {
  @ViewChild('details') detailsRef!: ElementRef;

  constructor(private route: Router) {}

  Heroes = HEROES;
  clickHero!: Hero;

  click(ch: Hero) {
    this.clickHero = ch;
  }

  ngOnInit(): void {
    if (localStorage.getItem('connected') != 'true') {
      this.route.navigate(['/login']);
    }
  }
  scrollToDOWN() {
    window.scroll({
      top: 140  , // change this to a positive value to scroll down

      behavior: 'smooth',
    });
  }
}
