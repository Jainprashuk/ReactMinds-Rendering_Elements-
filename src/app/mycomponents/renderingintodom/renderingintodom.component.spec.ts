import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingintodomComponent } from './renderingintodom.component';

describe('RenderingintodomComponent', () => {
  let component: RenderingintodomComponent;
  let fixture: ComponentFixture<RenderingintodomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderingintodomComponent]
    });
    fixture = TestBed.createComponent(RenderingintodomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
