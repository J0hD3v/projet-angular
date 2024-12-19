import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesManagerComponent } from './profiles-manager.component';

describe('ProfilesManagerComponent', () => {
  let component: ProfilesManagerComponent;
  let fixture: ComponentFixture<ProfilesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilesManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
