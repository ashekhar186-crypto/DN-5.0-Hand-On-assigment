import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        path: '',
        component: CourseList,
      },
      {
        path: ':id',
        component: CourseDetail,
      },
    ],
  },

  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfile,
  },

  {
    path: 'enroll',
    canActivate: [authGuard],
    component: EnrollmentForm,
  },

  {
    path: 'reactive-enroll',
    component: ReactiveEnrollmentForm,
    canDeactivate: [unsavedChangesGuard],
  },

  {
    path: '**',
    component: NotFound,
  },
];
