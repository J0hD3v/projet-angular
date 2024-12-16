import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant1Component } from './composant-1.component';

describe('Composant1Component', () => {
  let component: Composant1Component;
  let fixture: ComponentFixture<Composant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
