import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
})
export class SiginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      rol: 'b',
    });
  }
  submit(): void {
    console.log(this.form.getRawValue());
    this.http
      .post('http://127.0.0.1:8000', this.form.getRawValue())
      .subscribe((res) => {
        console.log(res);
      });
  }
}
