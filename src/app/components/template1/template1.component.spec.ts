import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template1Component } from './template1.component';

describe('Template1Component', () => {
  let component: Template1Component;
  let fixture: ComponentFixture<Template1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Template1Component]
    });
    fixture = TestBed.createComponent(Template1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
