import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By} from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DebugElement}from '@angular/core';
import { ComponentRegisterComponent } from './component-register.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF}from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
//import {Router } from '@angular/router';

describe('ComponentRegisterComponent', () => {
  let component: ComponentRegisterComponent;
  let fixture: ComponentFixture<ComponentRegisterComponent>;
  let de:DebugElement;
  let e1:HTMLElement;
 // let slimLoadingBarService:null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRegisterComponent],
     // slimLoadingBarService=TestBed.get(slimLoadingBarService)
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        { provide:APP_BASE_HREF,useValue:'/'}
      ]
    })
    .compileComponents().then(()=>{
        /*fixture=TestBed.createComponent(ComponentRegisterComponent);
        component =fixture.componentInstance;
        de=fixture.debugElement.query(By.css('form'));
        e1=de.nativeElement;*/
    });
  }));

  beforeEach(() => {
 fixture = TestBed.createComponent(ComponentRegisterComponent);
    component = fixture.componentInstance;
   fixture.detectChanges();
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
  component.registerForm.controls['firstName'].setValue('');
  component.registerForm.controls['lastName'].setValue('');
  component.registerForm.controls['username'].setValue('');
  component.registerForm.controls['password'].setValue('');
  expect(component.registerForm.hasError).toBeTruthy();
}));
 it('form should be valid',async(()=>{
  component.registerForm.controls['firstName'].setValue('Rizwana');
  component.registerForm.controls['lastName'].setValue('Syed');
   component.registerForm.controls['username'].setValue('Rizwana');
  component.registerForm.controls['password'].setValue('Rizwana1234');
  expect(component.registerForm.valid).toBeTruthy();
 }));
});
