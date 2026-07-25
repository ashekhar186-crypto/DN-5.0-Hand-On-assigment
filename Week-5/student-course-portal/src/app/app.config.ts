import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { CourseEffects } from './store/course/course.effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter } from '@angular/router';
import { courseReducer } from './store/course/course.reducer';
import { routes } from './app.routes';
import { loggingInterceptor } from './interceptors/logging-interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([loggingInterceptor])),

    provideStore({
      course: courseReducer,
    }),
    provideEffects([CourseEffects]),
    provideStoreDevtools({
      maxAge: 25,
    }),
  ],
};
