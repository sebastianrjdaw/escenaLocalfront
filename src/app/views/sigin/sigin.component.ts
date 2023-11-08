import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent  {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rol:'a'
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    console.log(this.form.valid);
    if (this.form.valid) {
      this.http
        .post('http://127.0.0.1:8000/api/register', this.form.getRawValue())
        .subscribe(() => {
          this.router.navigate(['/login']);
        });
    } else {
      this.form.touched;
    }
  }
}
