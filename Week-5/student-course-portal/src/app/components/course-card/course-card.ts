import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input()
  course: any;

  @Output()
  enroll = new EventEmitter<number>();

  isExpanded = false;

  constructor(private router: Router) {}

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  enrollCourse() {
    this.enroll.emit(this.course.id);
  }

  viewCourse() {
    this.router.navigate(['/courses', this.course.id]);
  }

  get cardClasses() {
    return {
      'card--enrolled': this.course?.enrolled,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded,
    };
  }
}
