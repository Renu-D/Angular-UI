import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF}from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MypostsComponent } from './myposts.component';

describe('MypostsComponent', () => {
  let component: MypostsComponent;
  let fixture: ComponentFixture<MypostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypostsComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[
        { provide:APP_BASE_HREF,useValue:'/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
