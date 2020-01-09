import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ComponentHomeComponent } from './component-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import {Igetpost} from '../getpost';
import { of } from 'rxjs';

describe('ComponentHomeComponent', () => {
  let component: ComponentHomeComponent;
  let fixture: ComponentFixture<ComponentHomeComponent>;
  let IgetPost={};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHomeComponent],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[
        { provide: APP_BASE_HREF, useValue:'/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHomeComponent);
    component = fixture.componentInstance;
    ///IgetPost=TestBed.get(IgetPost);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all posts data from server', () => {
      const dummy = [];
      const spy = spyOn(component, 'getPost').and.returnValue(of(dummy));
      component.ngOnInit();
      fixture.detectChanges();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(component.post).toEqual(dummy);

  });
  xit('should display the post',()=>{                                                                                                
    const spy1=spyOn(localStorage,'getItem')
    //const spy=spyOn(component,'viewPost').and.returnValue(of(itemid));
    component.ngOnInit();
    fixture.detectChanges();
  })
});
