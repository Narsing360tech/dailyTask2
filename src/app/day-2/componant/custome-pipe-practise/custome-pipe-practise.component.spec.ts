import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomePipePractiseComponent } from './custome-pipe-practise.component';

describe('CustomePipePractiseComponent', () => {
  let component: CustomePipePractiseComponent;
  let fixture: ComponentFixture<CustomePipePractiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomePipePractiseComponent]
    });
    fixture = TestBed.createComponent(CustomePipePractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
