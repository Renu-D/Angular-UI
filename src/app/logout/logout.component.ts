import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.length>0) {
      localStorage.clear();
      alert('Logout successfully');
      this.router.navigate(['login']);
    }
    else {
      alert('No user logged in');
      this.router.navigate(['login']);
    }
  }

}
