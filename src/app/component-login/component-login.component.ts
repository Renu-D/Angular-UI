import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl , Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-component-login',
  templateUrl: './component-login.component.html',
  styleUrls: ['./component-login.component.css']
})
export class ComponentLoginComponent implements OnInit {
  load=false;
  loginForm: FormGroup;
    submitted = false;
    serviceErrors: any={};
  HttpClient: any;
  username: any;
  password:any;
  constructor( private fb: FormBuilder,private http:HttpClient,private router:Router) {
   }
   invalidUserName()
   {
     return(this.submitted && (this.serviceErrors.username != null || this.loginForm.controls.username.errors != null));
   }
   invalidPassword()
   {
     return(this.submitted && (this.serviceErrors.password != null || this.loginForm.controls.password.errors != null));
   }

  ngOnInit() {
    //localStorage.clear();
    this.buildForm();
  }
  buildForm(){
    this.loginForm = this.fb.group({
      username            : [null, [Validators.required ] ],
      password        : [null, [ Validators.required ] ]
    });
  }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid === true) {
            return;
        }
        else
        {
          const credentials = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
          };
          const headers = new HttpHeaders({'Content-Type': 'application/json'});
          const body = JSON.stringify(credentials);
          this.http.post('http://192.168.5.59:4200/api/users/login' ,body, {headers})
            .subscribe((data: any) => {
              //console.log(data);
              alert("Successfully logged in");
              localStorage.setItem('currentUser', data);
              this.router.navigate(['home']);
            }, error => {
              alert(error.error.message);
            });
        }
    }
}
