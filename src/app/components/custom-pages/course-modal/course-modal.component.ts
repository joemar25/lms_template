import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-modal',
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  course: string = '';
  subject: string = '';
  block: string = '';
  time: string = '';

  closeModal() {
    this.close.emit();
  }

  submitForm() {
    this.save.emit({ course: this.course, subject: this.subject, block: this.block, time: this.time });
    this.closeModal();
  }
}
