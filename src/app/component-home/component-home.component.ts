import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { ViewportScroller } from '@angular/common';
import {Igetpost} from '../getpost';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { $ } from 'protractor';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.css']
})
export class ComponentHomeComponent implements OnInit {
  public post = [];
  message:any;
  //info= td.getAttribute('postId');
  
  constructor(private http:HttpClient , private router :Router) { 
    
  }

  ngOnInit() {

    this.getPost().subscribe(data => this.post = data);
   
    const User = localStorage.getItem('currentUser');
      const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
      this.http.get('http://192.168.5.59:4200/api/users/current', {headers})
      .subscribe((data: any) => {
    document.getElementById('user').innerHTML=' Welcome '+data.username+' !!';

  });
}


  getPost() : Observable<Igetpost[]>{

    const User = localStorage.getItem('currentUser');
    const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
    return this.http.get<Igetpost[]>('http://192.168.5.59:4200/api/users/posts/viewPosts',{headers});
    //return this.http.get<Igetpost[]>('http://192.168.5.171:8000/api/users/posts/viewposts',{headers});
    
  }
viewPost(item){
    //console.log("posting..."+item._id);
    /*const x = document.getElementById('get');
    console.log(x);*/
    console.log("hi");
    const User =localStorage.getItem('currentUser');
    localStorage.setItem('id',item._id);
    console.log(localStorage.getItem('id'));
    /*const User = localStorage.getItem('currentUser');
    //console.log(User);
    const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
    const body = {postId:item.postId};
    console.log(body);
    //this.http.post('http://192.168.5.171:8000/api/users/posts/getpost', body, {headers})
    this.http.post('http://192.168.5.60:4200/api/users/posts/getPost', body, {headers})
    .subscribe((data: any) => {
    //alert("successfully register");
    console.log(data);
    this.router.navigate(['viewpost']);
    },error => {
      console.log(error.error.message);
    });*/
    this.router.navigate(['viewpost']);
  }

 /* onSubmit()
  { 
    console.log("working");
    if(localStorage.length>0) {
      const User = localStorage.getItem('currentUser');
      //console.log(User);
      const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
      this.http.get('http://192.168.5.59:4200/api/users/current', {headers})
      .subscribe((data: any) => {
        //console.log(data);
        let show=document.getElementById('pop').innerHTML;
        let newwin=window.open('','_blank','width=500,height=500,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        newwin.document.open();
        newwin.document.write('Userdetails:<br>'+'Username: ' + data.username + '</br>First Name: ' + data.firstName +
        '</br>Last Name: ' + data.lastName + '</br>Created on: ' + data.createdDate);
    newwin.document.close();
    setTimeout(function(){newwin.close();},5000);
      }, error => {
        console.log(error.error.message);
      });
    }
    else {
      this.router.navigate(['login']);}

}*/
onLogout() {
  localStorage.clear();
  alert("logout successfully");
  this.router.navigate(['login']);
}
}
