import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormullaireComponent } from './formullaire.component';

describe('FormullaireComponent', () => {
  let component: FormullaireComponent;
  let fixture: ComponentFixture<FormullaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormullaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormullaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
