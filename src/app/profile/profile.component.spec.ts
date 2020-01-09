import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF}from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports:[
        FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule,CommonModule
      ],
      providers:[
        { provide:APP_BASE_HREF,useValue:'/'},
        { provide: FormBuilder, useValue: formBuilder }
      ],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.EditForm = formBuilder.group({
      firstName: null,
      lastName: null,
      username:null
   });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
