import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-day-4',
  templateUrl: './task-day-4.component.html',
  styleUrls: ['./task-day-4.component.scss'],
  animations: [
    trigger('loadingState', [
      state(
        'loading',
        style({
          opacity: 1,
          transform: 'scale(1.1)'
        }),
      ),
      state(
        'success',
        style({
          opacity: 1,
          transform: 'scale(1)'
        }),
      ),
      state(
        'error',
        style({
          opacity: 1,
          transform: 'scale(1)'
        }),
      ),
      transition('loading => error', [animate('300ms ease-out')]),
      transition('loading => success', [animate('300s ease-in')]),
    ])]
})
export class TaskDay4Component {
  form: FormGroup;
  SubmissionState: 'first' | 'success' | 'loading' | 'error' = 'first';
  submittedData: any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.SubmissionState = 'loading';
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          this.submittedData = this.form.value;
          this.SubmissionState = "success";
        } else {
          this.SubmissionState = 'error';
        }
      }, 2000)
    }
  }
}
