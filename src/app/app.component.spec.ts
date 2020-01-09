import {APP_BASE_HREF}from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';
import {RouterModule,Routes}from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
//import {ComponentRegisterComponent} from './component-register/component-register.component';

describe('AppComponent', () => {
  /*const routes:Routes=[
    { path:'register',component:ComponentRegisterComponent},

  ];*/
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        //RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        //ComponentRegisterComponent
      ],
      providers:[
        { provide:APP_BASE_HREF,useValue:'/'}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hello-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('hello-app');
  });

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('container').textContent).toContain('hello-app app is running!');
  });*/
});
