import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant6Component } from './composant-6.component';

describe('Composant6Component', () => {
  let component: Composant6Component;
  let fixture: ComponentFixture<Composant6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
