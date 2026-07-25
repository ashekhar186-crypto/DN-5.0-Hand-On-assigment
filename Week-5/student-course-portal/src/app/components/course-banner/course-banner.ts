import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-banner',
  standalone: true,
  imports: [],
  templateUrl: './course-banner.html',
  styleUrl: './course-banner.css',
})
export class CourseBanner {
  @Input() portalName = '';

  @Output() bannerClicked = new EventEmitter<void>();

  notifyParent() {
    this.bannerClicked.emit();
  }
}
