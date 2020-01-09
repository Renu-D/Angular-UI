import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl , Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  load=false;
  PostForm: FormGroup;
    submitted = false;
    serviceErrors: any={};
  HttpClient: any;
  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router) {
  }
  invalidId()
   {
     return(this.submitted && (this.serviceErrors.PostId != null || this.PostForm.controls.PostId.errors != null));
   }
   invalidTitle()
   {
     return(this.submitted && (this.serviceErrors.Title != null || this.PostForm.controls.Title.errors != null));
   }
   invalidContent()
   {
     return(this.submitted && (this.serviceErrors.Content != null || this.PostForm.controls.Content.errors != null));
   }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.PostForm = this.fb.group({
     PostId            : [null, [Validators.required ] ],
      Title       : [null, [ Validators.required ] ],
      Content : [null,[Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.PostForm.invalid ==true) {
        return;
    }
    else
    {  
      const details = {
        postId: this.PostForm.value.PostId,
        title: this.PostForm.value.Title,
        description:this.PostForm.value.Content
      };
      if(localStorage.length>0)
      { 
        const User = localStorage.getItem('currentUser');
      const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: `Bearer ${User}`});
      const body = JSON.stringify(details);
      this.http.post('http://192.168.5.59:4200/api/users/posts/addPost' ,body, {headers})
        .subscribe((data: any) => {
          //console.log(data);
          alert(data.message);
          this.router.navigate(['/home']);
        }, error => {
          alert(error.error.message);
        });

    
    }
  }
}
}
