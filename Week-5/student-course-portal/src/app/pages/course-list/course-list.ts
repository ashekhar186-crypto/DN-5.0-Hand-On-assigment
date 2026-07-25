import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CourseActions from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../services/course';
import { Notification } from '../../services/notification';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$!: Observable<any[]>;

  isLoading = true;
  searchTerm = '';

  constructor(
    private store: Store,
    private courseService: Course,
    private notification: Notification,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') || '';

    this.courses$ = this.store.select(selectAllCourses);

    this.store.dispatch(CourseActions.loadCourses());
  }

  enroll(id: number): void {
    this.courseService.enrollCourse(id).subscribe({
      next: () => {
        this.notification.show('Course enrolled successfully!');

        // Reload courses through NgRx
        this.store.dispatch(CourseActions.loadCourses());
      },
      error: (err) => {
        console.error(err);
        this.notification.show('Enrollment failed.');
      },
    });
  }

  searchCourses(): void {
    this.router.navigate(['/courses'], {
      queryParams: {
        search: this.searchTerm,
      },
    });

    this.store.dispatch(CourseActions.loadCourses());
  }

  viewCourse(id: number): void {
    this.router.navigate(['/courses', id]);
  }

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }
}
