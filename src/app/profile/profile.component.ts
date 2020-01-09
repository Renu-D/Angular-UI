import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { FormGroup ,Validators, FormBuilder,FormControl} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 /* public first : FormControl;
  public last:FormControl;
  public user1 : FormControl;
  public pass : FormControl;*/
  submitted=false;
  EditForm:FormGroup;
  user:{  
    firstName: string,
    lastName: string,
    username: string,
   // password:string
  }

  constructor(private http: HttpClient, private router: Router,private fb:FormBuilder) { }
	private subscriber: any;
  ngOnInit() {
    console.log("profile");
    if(localStorage.length>0) {
      const User = localStorage.getItem('currentUser');
      //console.log(User);
      const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
      this.http.get('http://192.168.5.59:4200/api/users/current', {headers})
      .subscribe((data: any) => {
        //console.log(data);
        this.user=data;
        this.buildForm(this.user); 
       // this.editprofile(this.user);
        document.getElementById('show').innerHTML = 'Username: ' + data.username + '</br>First Name: ' + data.firstName +
        '</br>Last Name: ' + data.lastName + '</br>Created on: ' + data.createdDate;
      }, error => {
        alert(error.error.message);
      });
    }
    else {
      this.router.navigate(['login']);
    }
  }
  buildForm(user)
  {this.EditForm=this.fb.group({
      firstName : new FormControl([user.firstName, Validators.required]),
      lastName :new FormControl([user.lastName, Validators.required]),
      username: new FormControl([user.username, Validators.required])
      //password : new FormControl([user.password, [Validators.required, Validators.minLength(6)]]),
  });
  }
/*editprofile(){
      this.EditForm.firstName=new FormControl();
      this.last=new FormControl();
      this.user1=new FormControl();
      this.pass=new FormControl();

  }*/
  onSubmit()
  {  this.submitted=true;
    console.log("hi");
    if(localStorage.length>0) {
    const details = {
      firstName: this.EditForm.value.firstName,
      lastName: this.EditForm.value.lastName,
      username: this.EditForm.value.username
     // password: this.EditForm.value.password
    };
  
  console.log('values: '+this.EditForm.value.firstName);
  const User = localStorage.getItem('currentUser');
  const headers = new HttpHeaders({Authorization: `Bearer ${User}`});
  const body = JSON.stringify(details);
  console.log(body);
  this.http.put('http://192.168.5.59:4200/api/users/updateProfile', details, {headers})
    .subscribe((data: any) => {
      alert(data.message);
      //window.location.reload();
      //this.router.navigate(['profile']);
    }, error => {
      alert(error.error.message);
    });

  }
  else
  this.router.navigate(['login']);
}
}
