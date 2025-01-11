import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-day-5',
  templateUrl: './day-5.component.html',
  styleUrls: ['./day-5.component.scss']
})
export class Day5Component {
  dynamicForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      personalInfo: this.fb.group({
        name: [''],
        email: [''],
      }),
      addresses: this.fb.array([]),
    });
  }

  get addresses(): FormArray {
    return this.dynamicForm.get('addresses') as FormArray;
  }

  addAddress() {
    const addressGroup = this.fb.group({
      street: ['',],
      city: ['',],
      zip: ['',],
    });
    this.addresses.push(addressGroup);
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('Form Data:', this.dynamicForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
