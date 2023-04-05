import { Component, OnInit, Input } from '@angular/core';
import { Hero, HEROES } from '../formateur';
@Component({
  selector: 'app-details-formateur',
  templateUrl: './details-formateur.component.html',
  styleUrls: ['./details-formateur.component.css'],
})
export class DetailsFormateurComponent implements OnInit {
  constructor() {}
  @Input() hero!: Hero;
  ngOnInit(): void {}
}
