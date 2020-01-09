import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ViewpostComponent } from './viewpost.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
describe('ViewpostComponent', () => {
  let component: ViewpostComponent;
  let fixture: ComponentFixture<ViewpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostComponent ],
      imports:[
        FormsModule,ReactiveFormsModule,HttpClientTestingModule,RouterTestingModule
      ],
      providers:[
        { provide:APP_BASE_HREF,useValue:'/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
