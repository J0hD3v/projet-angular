import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSignalsComponent } from './tasks-signals.component';

describe('TasksSignalsComponent', () => {
  let component: TasksSignalsComponent;
  let fixture: ComponentFixture<TasksSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
