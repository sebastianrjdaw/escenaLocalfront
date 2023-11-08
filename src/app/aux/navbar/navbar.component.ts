import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:[ './navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  authenticated = false;

  constructor(private http: HttpClient) {} 

  ngOnInit(): void {
    console.log(this.authenticated);
    Emitters.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth;
    });
  }

  logOut() {
        sessionStorage.removeItem('token');
        Emitters.authEmitter.emit(false);
  }
}
