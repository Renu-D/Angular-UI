import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl , Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { userInfo } from 'os';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  submitted=false;
  public viewPost=[];
  public dataa;
  public post;
  public my=false;
  PostForm:FormGroup;
  id:string;
  content:any;
  details:{  postid: string,
    title: string,
    content: string,
    }

  constructor(private http: HttpClient, private router: Router,private fb:FormBuilder) { }

  ngOnInit() {
    //console.log('hello');
    this.comments();
    this.buildForm();
    if(localStorage.length>0) {
      const User = localStorage.getItem('currentUser');
      console.log('postId: '+localStorage.getItem('id'));
      
      //console.log(User);
      const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
      this.http.get('http://192.168.5.59:4200/api/users/posts/getPost/'+localStorage.getItem('id'),{headers})
      .subscribe((data: any) => {
        document.getElementById('show').innerHTML =  'Postid :' + '<b>'+data.postId+'</b>' + '<br>Title:' + '<b>'+data.title+'</b>' +
        '<br>Content:  ' + '<b>'+data.description+'</b>'+'<br>PostedBy:'+data.author.username;
      }, error => {
        alert(error.error.message);
      });
      //localStorage.removeItem('id');
    }
    else {
      this.router.navigate(['login']);
    }
  }
  buildForm()
  { this.PostForm=this.fb.group({
    content:[null,[Validators.required]],
  });



  }
 /* onSubmit()
  { 
  
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
        newwin.document.write('Userdetails:<br><br>'+'Username: ' + data.username + '</br>First Name: ' + data.firstName +
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
  postReply(form:NgForm)
  { this.submitted=true;
    if(form.invalid==true)
      return;
    else
    { const details={
      text:form.value.Content
    };
    if(localStorage.length>0)
    { const User = localStorage.getItem('currentUser');
    const headers = new HttpHeaders({'Content-Type':'application/json',Authorization: `Bearer ${User}`});
    const body=JSON.stringify(details);
    this.http.post('http://192.168.5.59:4200/api/users/posts/'+localStorage.getItem('id')+'/addComment',body,{headers})
    .subscribe((data: any) =>{
      alert(data.message);
      this.ngOnInit();
      form.reset();
    // window.location.reload();

    },error =>{
        alert(error.error.message);
    });

    }

    }
}
comments()
{
  const User = localStorage.getItem('currentUser');
    const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
    this.http.get('http://192.168.5.59:4200/api/users/posts/getPost/'+localStorage.getItem('id'),{headers})
    .subscribe((data: any) =>{
      this.viewPost=data.comments;
      this.post=data;
      //console.log(data.comments.length);
      if(data.comments.length==0)
       return true;
      //document.getElementById('view').innerHTML= 'comments:' +data.comments+ 'commentedBy:'+data.comments.commentBy.username;
});
//localStorage.removeItem('id');
}
deleteComment(item)
{ const User = localStorage.getItem('currentUser');
//console.log(localStorage.getItem('id'));
//console.log(User);
const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
//  const body ={postId:localStorage.getItem('id')};
// console.log(body);
this.http.get('http://192.168.5.59:4200/api/users/current', {headers})
      .subscribe((user: any) => { 
        this.dataa=user.username;
      });
     
this.http.get('http://192.168.5.59:4200/api/users/posts/getPost/'+localStorage.getItem('id'),{headers})
.subscribe((data: any) => {
  if(data.author.username==this.dataa)
  {   
     this.my=true;
  }
});
console.log(this.my);
 // const User = localStorage.getItem('currentUser');
//const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
localStorage.setItem('commentId',item._id);
console.log(localStorage.getItem('commentId'));
this.http.delete('http://192.168.5.59:4200/api/users/posts/'+this.post._id+'/deleteComment/'+localStorage.getItem('commentId'),{headers})
.subscribe((data:any)=>
{ alert(data.message);
  this.ngOnInit();

},error=>{
  alert(error.error.message)
}
);


}
}
