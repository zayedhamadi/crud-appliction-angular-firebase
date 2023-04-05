import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Participant } from '../participant';
import { AuthService } from '../services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { jsPDF } from 'jspdf';

import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css'],
})
export class PresenceComponent implements OnInit {
  Paticipant: Participant[] = [];
  constructor(private route: Router, public ParticipantService: AuthService) {}

  ngOnInit(): void {
    this.ParticipantService.getParticipantList().subscribe((res) => {
      this.Paticipant = res.map((e) => {
        return {
          id: e.payload.doc.id,

          ...(e.payload.doc.data() as {}),
        } as Participant;
      });
      console.log(this.Paticipant);
    });
    if (localStorage.getItem('connected') != 'true') {
      this.route.navigate(['/login']);
    }
  }

  //print page
  print() {
    window.print();
  }
  @ViewChild('content', { static: false }) el!: ElementRef;
  //download
  download() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('Save the document.pdf');
      },
    });
  }
}
