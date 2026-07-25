import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Course {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(() => console.log('Courses fetched successfully')),
      catchError(this.handleError),
    );
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log(`Course ${id} fetched successfully`)),
      catchError(this.handleError),
    );
  }

  enrollCourse(id: number): Observable<any> {
    return this.http
      .patch(`${this.apiUrl}/${id}`, {
        enrolled: true,
      })
      .pipe(
        tap(() => console.log(`Enrolled in course ${id}`)),
        catchError(this.handleError),
      );
  }

  private handleError(error: any) {
    console.error('HTTP Error:', error);
    return throwError(() => new Error('Something went wrong. Please try again.'));
  }
}
