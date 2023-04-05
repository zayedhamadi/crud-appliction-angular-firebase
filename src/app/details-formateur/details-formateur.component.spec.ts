import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormateurComponent } from './details-formateur.component';

describe('DetailsFormateurComponent', () => {
  let component: DetailsFormateurComponent;
  let fixture: ComponentFixture<DetailsFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFormateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
