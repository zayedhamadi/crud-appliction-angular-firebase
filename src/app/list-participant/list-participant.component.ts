import { Component, OnDestroy, HostBinding, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css'],
})
export class ListParticipantComponent implements OnInit, OnDestroy {
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

  constructor(
    private route: Router,
    participantSubscription: AuthService,
    private ParticipantService: AuthService
  ) {}
  Paticipant: Participant[] = [];
  searchText: string = '';

  searchParticipant() {
    this.ParticipantService.getParticipantList().subscribe((res) => {
      this.Paticipant = res
        .map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as {}),
          } as Participant;
        })
        .filter((participant) => {
          return participant.prenom
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });
    });
  }

  //connected

  removeParticipant(participant: Participant) {
    const confirmation = confirm(
      'Êtes-vous sûr de vouloir supprimer ' + participant.prenom + ' ?'
    );
    if (confirmation) {
      console.log('Participant object to be deleted:', participant);
      this.ParticipantService.DeleteParticipant(participant).then(() => {
        const index = this.Paticipant.indexOf(participant);
        if (index !== -1) {
          this.Paticipant.splice(index, 1);
        }
      });
    }
  }

  sideNavStatus: boolean = false;
  print() {
    window.print();
  }

  ngOnDestroy(): void {
    // add any necessary cleanup code here
  }
}
