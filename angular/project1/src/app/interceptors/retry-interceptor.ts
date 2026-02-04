import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  // how to call an interceptor only for few APIs
  if (req.url.includes('employees')) {
    return next(req).pipe(retry(2));
  } else {
    return next(req);
  }
};
