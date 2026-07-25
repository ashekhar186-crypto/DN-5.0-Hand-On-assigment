import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('➡️ Request:', req.method, req.url);

  return next(req).pipe(
    tap({
      next: (event) => {
        console.log('✅ Response received:', event);
      },
      error: (error) => {
        console.error('❌ HTTP Error:', error);
      },
    }),
  );
};
