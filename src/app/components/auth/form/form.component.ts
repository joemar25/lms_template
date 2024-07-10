import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

import { InputField } from '../../../auth/models/input-fields';
import { FormSectionComponent } from '../form-section/form-section.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [CommonModule, MatStepperModule, FormSectionComponent],
})
export class FormComponent {
  step: number = 0;
  formData: { personalDetails: InputField[]; addressDetails: InputField[] } = {
    personalDetails: [
      {
        label: 'First Name',
        placeholder: 'Enter your first name',
        value: '',
        type: 'text',
        id: 'first-name',
      },
      {
        label: 'Last Name',
        placeholder: 'Enter your last name',
        value: '',
        type: 'text',
        id: 'last-name',
      },
      {
        label: 'Email',
        placeholder: 'Enter your email address',
        value: '',
        type: 'email',
        id: 'email',
      },
      {
        label: 'Phone',
        placeholder: 'Enter your phone number',
        value: '',
        type: 'text',
        id: 'phone',
      },
      {
        label: 'Website',
        placeholder: 'Enter your website URL',
        value: '',
        type: 'text',
        id: 'website',
      },
    ],
    addressDetails: [
      {
        label: 'Address Line1',
        placeholder: 'Address Line1',
        value: '',
        type: 'text',
        id: 'address-line1',
      },
      {
        label: 'Address Line2',
        placeholder: 'Address Line2',
        value: '',
        type: 'text',
        id: 'address-line2',
      },
      {
        label: 'City',
        placeholder: 'Enter your city',
        value: '',
        type: 'text',
        id: 'city',
      },
      {
        label: 'ZipCode',
        placeholder: 'Enter your zipcode',
        value: '',
        type: 'text',
        id: 'zipcode',
      },
    ],
  };

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  submitForm(): void {
    console.log('Form Submitted', this.formData);
  }
}
