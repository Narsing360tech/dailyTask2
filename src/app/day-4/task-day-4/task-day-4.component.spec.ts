import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDay4Component } from './task-day-4.component';

describe('TaskDay4Component', () => {
  let component: TaskDay4Component;
  let fixture: ComponentFixture<TaskDay4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDay4Component]
    });
    fixture = TestBed.createComponent(TaskDay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
