import { CourseBanner } from '../../components/course-banner/course-banner';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CourseBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnChanges, OnDestroy {
  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  ngOnInit(): void {
    console.log('Home Component Initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected:', changes);
  }

  ngOnDestroy(): void {
    console.log('Home Component Destroyed');
  }

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  onBannerClicked() {
    alert('Message received from Child Component!');
  }
}
