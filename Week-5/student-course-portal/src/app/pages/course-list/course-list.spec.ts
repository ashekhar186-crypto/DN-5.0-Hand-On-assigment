import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { CourseList } from './course-list';
import { Course } from '../../services/course';
import { Notification } from '../../services/notification';

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideRouter([]),

        provideMockStore({
          initialState: {
            course: {
              courses: [],
              loading: false,
              error: null,
            },
          },
        }),

        {
          provide: Course,
          useValue: {
            getCourses: () => of([]),
            enrollCourse: () => of({}),
          },
        },

        {
          provide: Notification,
          useValue: {
            show: () => {},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
