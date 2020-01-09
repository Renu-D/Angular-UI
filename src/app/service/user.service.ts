import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>('192.168.5.61:4000/api/users');
    }

    register(user) {
        return this.http.post('192.168.5.61:4000/api/users/login',user);
    }
}