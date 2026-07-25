import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
function noAdminValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value && control.value.toLowerCase() === 'admin') {
    return {
      forbiddenName: true,
    };
  }

  return null;
}
const emailExistsValidator: AsyncValidatorFn = (
  control: AbstractControl,
): Observable<ValidationErrors | null> => {
  return of(control.value).pipe(
    delay(1000),

    map((email) => {
      if (email === 'admin@test.com') {
        return {
          emailTaken: true,
        };
      }

      return null;
    }),
  );
};
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm {
  enrollmentForm: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3), noAdminValidator]],

      studentEmail: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [emailExistsValidator],
        },
      ],

      courseId: ['', Validators.required],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue],

      skills: this.fb.array([this.fb.control('')]),
    });
  }

  onSubmit() {
    console.log(this.enrollmentForm.value);
    console.log(this.enrollmentForm.valid);

    this.submitted = true;
  }

  resetForm() {
    this.enrollmentForm.reset();

    this.submitted = false;
  }
  get skills(): FormArray {
    return this.enrollmentForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
