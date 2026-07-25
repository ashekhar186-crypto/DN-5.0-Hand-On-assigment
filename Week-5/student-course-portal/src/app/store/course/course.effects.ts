import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import * as CourseActions from './course.actions';
import { Course } from '../../services/course';

@Injectable()
export class CourseEffects {
  private actions$ = inject(Actions);
  private courseService = inject(Course);

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      switchMap(() =>
        this.courseService.getCourses().pipe(
          map((courses) => CourseActions.loadCoursesSuccess({ courses })),
          catchError((error) =>
            of(
              CourseActions.loadCoursesFailure({
                error: error.message,
              }),
            ),
          ),
        ),
      ),
    ),
  );
}
