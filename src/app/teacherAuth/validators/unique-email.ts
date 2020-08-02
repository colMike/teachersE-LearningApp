import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { TeacherAuthService } from '../teacher-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: TeacherAuthService) {}

  validate = (control: FormControl) => {
    const { value } = control;

    return this.authService.emailAvailable(value).pipe(
      map(value => {
        console.log(value)
        if (value.available) {
          return null;
        } else {
          return of({ nonUniqueUsername: true });
        }
      }),
      catchError(err => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
