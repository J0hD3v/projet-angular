import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPDataBindingComponent } from './tp-data-binding.component';

describe('TPDataBindingComponent', () => {
  let component: TPDataBindingComponent;
  let fixture: ComponentFixture<TPDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
