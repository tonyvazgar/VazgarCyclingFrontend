import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isRequired, isEmailRequired } from '../../utils/validators';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
})
export default class SignUpComponent {
  private _formBuilder = inject(NonNullableFormBuilder);

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form)
  }

  isValidEmail() {
    return isEmailRequired(this.form)
  }

  form = this._formBuilder.group<FormSignUp>({
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', Validators.required),
  });

  submit() {
    // alert(JSON.stringify(this.form.value))
    if(this.form.invalid) return

    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    if(!email || !password) return


    console.log("🚀 ~ SignUpComponent ~ submit ~ email:", {email,password})
  }
}
