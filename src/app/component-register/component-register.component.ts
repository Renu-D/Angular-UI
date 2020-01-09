import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-component-register',
  templateUrl: './component-register.component.html',
  styleUrls: ['./component-register.component.css']
})
export class ComponentRegisterComponent implements OnInit {
  registerForm: FormGroup;
    registered = false;
    submitted = false;
    serviceErrors:any = {};
  username: any;
  constructor( private fb : FormBuilder,
    private http: HttpClient, private router :Router){
    }
  invalidFirstName()
  {
  	return (this.submitted && (this.serviceErrors.firstName != null || this.registerForm.controls.firstName.errors != null));
  }

  invalidLastName()
  {
  	return (this.submitted && (this.serviceErrors.lastName != null || this.registerForm.controls.lastName.errors != null));
  }

  invalidUserName()
  {
  	return (this.submitted && (this.serviceErrors.username != null || this.registerForm.controls.username .errors != null));
  }
  invalidPassword()
  {
  	return (this.submitted && (this.serviceErrors.password != null || this.registerForm.controls.password.errors != null));
  }

  ngOnInit() {
    this.buildForm();
  }
  buildForm()
  {this.registerForm=this.fb.group({
      firstName :new FormControl( ['', Validators.required]),
      lastName :new FormControl( ['', Validators.required]),
      username : new FormControl(['', Validators.required]),
      password :new FormControl( ['', [Validators.required, Validators.minLength(6)]])
  });
  }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid === true) {
            return;
        }
        else
        {
          const details = {
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            username: this.registerForm.value.username,
            password: this.registerForm.value.password
          };
          const headers = new HttpHeaders( {'Content-Type': 'application/json'});
          const body = JSON.stringify(details);
          this.http.post('http://192.168.5.59:4200/api/users/register', body, {headers})
            .subscribe((data: any) => {
              alert("successfully registered");
              this.router.navigate(['login']);
            }, error => {
              alert(error.error.message);
            });
        }
    }
}
