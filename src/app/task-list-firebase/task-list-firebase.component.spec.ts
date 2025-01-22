import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListFirebaseComponent } from './task-list-firebase.component';

describe('TaskListFirebaseComponent', () => {
  let component: TaskListFirebaseComponent;
  let fixture: ComponentFixture<TaskListFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListFirebaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
