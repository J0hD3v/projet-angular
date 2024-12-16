import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composant2Component } from './composant-2.component';

describe('Composant2Component', () => {
  let component: Composant2Component;
  let fixture: ComponentFixture<Composant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composant2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Composant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
