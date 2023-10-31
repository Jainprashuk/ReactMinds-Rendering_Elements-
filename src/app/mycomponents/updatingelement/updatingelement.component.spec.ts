import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingelementComponent } from './updatingelement.component';

describe('UpdatingelementComponent', () => {
  let component: UpdatingelementComponent;
  let fixture: ComponentFixture<UpdatingelementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatingelementComponent]
    });
    fixture = TestBed.createComponent(UpdatingelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
