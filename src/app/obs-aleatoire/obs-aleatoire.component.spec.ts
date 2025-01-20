import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsAleatoireComponent } from './obs-aleatoire.component';

describe('ObsAleatoireComponent', () => {
  let component: ObsAleatoireComponent;
  let fixture: ComponentFixture<ObsAleatoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsAleatoireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsAleatoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
