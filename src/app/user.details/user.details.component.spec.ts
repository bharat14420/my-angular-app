import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.DetailsComponent } from './user.details.component';

describe('User.DetailsComponent', () => {
  let component: User.DetailsComponent;
  let fixture: ComponentFixture<User.DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User.DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
