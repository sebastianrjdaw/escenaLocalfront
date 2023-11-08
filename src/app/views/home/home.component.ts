
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from "aos";
import { Emitters } from 'src/app/emitters/emitters';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router){}

  ngOnInit(): void {
    AOS.init();
  if(!sessionStorage.getItem('token')) {
    Emitters.authEmitter.emit(false);
  } else{
    Emitters.authEmitter.emit(true);
  }
    
  }

}
