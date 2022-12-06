import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireregisterComponent } from './fireregister.component';

describe('FireregisterComponent', () => {
  let component: FireregisterComponent;
  let fixture: ComponentFixture<FireregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
