import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarhbaComponent } from './marhba.component';

describe('MarhbaComponent', () => {
  let component: MarhbaComponent;
  let fixture: ComponentFixture<MarhbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarhbaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarhbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
