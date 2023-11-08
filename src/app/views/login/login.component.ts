import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    console.log(this.form.valid);
    if (this.form.valid) {
      this.http
        .post('http://127.0.0.1:8000/api/login', this.form.getRawValue(), {withCredentials:true})
        .subscribe((res:any) => {
          sessionStorage.setItem('token', res.jwt);
          this.router.navigate(['/profile']);
        });
    } else {
      this.form.touched;
    }
  }
}

