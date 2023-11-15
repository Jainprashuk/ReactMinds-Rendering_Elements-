import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompilerComponent } from './mycompiler.component';

describe('MycompilerComponent', () => {
  let component: MycompilerComponent;
  let fixture: ComponentFixture<MycompilerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycompilerComponent]
    });
    fixture = TestBed.createComponent(MycompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
