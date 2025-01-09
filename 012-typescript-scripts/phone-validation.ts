import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-example',
  template: `
    <form [formGroup]="myForm">
      <input type="text" formControlName="phoneNumber">
      <button (click)="validatePhoneNumber()">Validate</button>
      <p *ngIf="phoneNumber.invalid && phoneNumber.touched">
        Please enter a valid phone number.
      </p>
    </form>
  `,
})
export class ValidationExampleComponent {
  myForm: FormGroup;

  get phoneNumber() {
    return this.myForm.get('phoneNumber');
  }

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  validatePhoneNumber() {
    const phoneNumberControl = this.myForm.get('phoneNumber');
    phoneNumberControl.markAsTouched();

    if (phoneNumberControl.invalid) {
      // Perform additional validation or error handling
      return;
    }

    // Phone number is valid, continue with further actions
    console.log('Phone number is valid!');
  }
}