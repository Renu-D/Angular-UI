import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ComponentLoginComponent } from './component-login.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import { DebugElement}from '@angular/core';
import { BrowserModule, By} from '@angular/platform-browser';

describe('ComponentLoginComponent', () => {
  let component: ComponentLoginComponent;
  let fixture: ComponentFixture<ComponentLoginComponent>;
  let de:DebugElement;
  let e1:HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLoginComponent ],
      imports:[
        FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule,BrowserModule
      ],
      providers:[
        { provide:APP_BASE_HREF,useValue:'/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set submitted to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
}));
it('should call the onSubmit method',async(()=>{
  spyOn(component,'onSubmit');
 e1=fixture.debugElement.query(By.css('button')).nativeElement;
e1.click();
 expect(component.onSubmit).toHaveBeenCalledTimes(1);
}));
it('form should be invalid',async(()=>{
  component.loginForm.controls['username'].setValue('');
  component.loginForm.controls['password'].setValue('');
  expect(component.loginForm.hasError).toBeTruthy();
}));
 it('form should be valid',async(()=>{
   component.loginForm.controls['username'].setValue('Rizwana');
  component.loginForm.controls['password'].setValue('Rizwana1234');
  expect(component.loginForm.valid).toBeTruthy();
 }));
});
