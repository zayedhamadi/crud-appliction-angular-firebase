import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Participant } from '../participant';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private route: Router,
    private angularfirestore: AngularFirestore
  ) {}

  // login
  login(uname: string, pw: any, lname: any, mail: any) {
    if (
      uname == 'zayed' &&
      pw == 'zayed123' &&
      lname == 'hamadi' &&
      mail == 'zayedh80@gmail.com'
    ) {
      return 200;
    } else {
      return 404;
    }
  }

  // logout
  logout() {
    this.route.navigate(['login']);
  }

  // getParticipantDoc
  getParticipantDoc(id: any) {
    return this.angularfirestore
      .collection('Participant-collection')
      .doc(id)
      .valueChanges();
  }

  //  getParticipantList
  getParticipantList() {
    return this.angularfirestore
      .collection('Participant-collection')
      .snapshotChanges();
  }

  //delete
  DeleteParticipant(Participant: Participant) {
    const docRef = this.angularfirestore
      .collection('Participant-collection')
      .doc(Participant.id);
    return docRef.delete();
  }
  // Create
  CreateParticipant(Participant: Participant) {
    return new Promise<any>((resolve, reject) => {
      this.angularfirestore
        .collection('Participant-collection')
        .add(Participant)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
          
        );
    });
  }

  // Update
  UpdateParticipant(Participant: Participant, id: any) {
    return this.angularfirestore
      .collection('Participant-collection')
      .doc(id)
      .update({
        id: Participant.id,
        Prenom: Participant.prenom,
        name: Participant.nom,
        CIN: Participant.CIN,
        Direction: Participant.Direction,
        Entreprise: Participant.Entreprise,
        telephone: Participant.telephone,
        email: Participant.email,
        cycle: Participant.cycle,
      });
  }
}
