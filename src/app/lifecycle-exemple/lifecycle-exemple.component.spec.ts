import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExempleComponent } from './lifecycle-exemple.component';

describe('LifecycleExempleComponent', () => {
  let component: LifecycleExempleComponent;
  let fixture: ComponentFixture<LifecycleExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleExempleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
