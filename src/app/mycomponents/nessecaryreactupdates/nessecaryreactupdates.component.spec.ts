import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NessecaryreactupdatesComponent } from './nessecaryreactupdates.component';

describe('NessecaryreactupdatesComponent', () => {
  let component: NessecaryreactupdatesComponent;
  let fixture: ComponentFixture<NessecaryreactupdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NessecaryreactupdatesComponent]
    });
    fixture = TestBed.createComponent(NessecaryreactupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
