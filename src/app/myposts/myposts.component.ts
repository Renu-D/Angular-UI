import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { ViewportScroller } from '@angular/common';
import {myPosts} from '../getpost';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  public myposts = [];
  message:any;
  constructor(private http:HttpClient , private router :Router ) { }

  ngOnInit() {
    this.myPosts().subscribe(data => this.myposts = data);
   
    const User = localStorage.getItem('currentUser');
      const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
      this.http.get('http://192.168.5.59:4200/api/users/current', {headers})
      .subscribe((data: any) => {
    document.getElementById('user').innerHTML=' Check your posts..';

  });
}
myPosts() : Observable<myPosts[]>{

  const User = localStorage.getItem('currentUser');
  const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
  return this.http.get<myPosts[]>('http://192.168.5.59:4200/api/users/posts/viewMyPosts',{headers});
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
deletePost(item){
  const User = localStorage.getItem('currentUser');
  const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
  localStorage.setItem('id',item._id);
  this.http.delete('http://192.168.5.59:4200/api/users/posts/deletePost/'+localStorage.getItem('id'),{headers})
  .subscribe((data:any)=>
  { alert(data.message);
    this.ngOnInit();

  },error=>{
    alert(error.error.message)
  }
  );
}
}
