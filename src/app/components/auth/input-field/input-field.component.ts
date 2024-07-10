import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
  imports: [FormsModule],
})
export class InputFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.id) {
      this.id =
        this.label.toLowerCase().replace(/ /g, '-') +
        '-' +
        Math.floor(Math.random() * 1000);
    }
  }

  onValueChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }
}
