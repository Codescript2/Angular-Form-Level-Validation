import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatch } from './custom-validators/password-match.validator';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: [
      passwordMatch('password', 'confirmPassword')
    ]
  })

  handleSubmit() {
    console.log(this.form);
  }
}
