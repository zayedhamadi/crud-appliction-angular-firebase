import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css'],
})
export class EditParticipantComponent implements OnInit {
  public editform!: FormGroup;
  public Participantref: any;

  constructor(
    public route: Router,
    public FormBuilder: FormBuilder,
    public ParticipantService: AuthService,
    private act: ActivatedRoute
  ) {
    this.editform = this.FormBuilder.group({
      id: [''],
      name: [''],
      CIN: [''],
      Direction: [''],
      Entreprise: [''],
      telephone: [''],
      email: [''],
      cycle: [''],
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');
    this.ParticipantService.getParticipantDoc(id).subscribe((res) => {
      this.Participantref = res;
      this.editform = this.FormBuilder.group({
        id: [this.Participantref.id],
        name: [this.Participantref.name],
        CIN: [this.Participantref.CIN],
        Direction: [this.Participantref.Direction],
        Entreprise: [this.Participantref.Entreprise],
        telephone: [this.Participantref.telephone],
        email: [this.Participantref.email],
        cycle: [this.Participantref.cycle],
      });
    });
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');
    this.ParticipantService.UpdateParticipant(this.editform.value, id);
    this.route.navigate(['ListParticipant']);
  }
}
