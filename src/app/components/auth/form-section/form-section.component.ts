import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '../input-field/input-field.component';
import { InputField } from '../../../auth/models/input-fields';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, InputFieldComponent],
})
export class FormSectionComponent {
  @Input() sectionTitle: string = '';
  @Input() fields: InputField[] = [];
}
