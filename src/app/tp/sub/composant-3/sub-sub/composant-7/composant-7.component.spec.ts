import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant7Component } from './composant-7.component';

describe('Composant7Component', () => {
  let component: Composant7Component;
  let fixture: ComponentFixture<Composant7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
