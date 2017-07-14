import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Configuration } from '../app.constants';

@Injectable()
export class AuthenticationService {
    private conf = new Configuration();
    
    constructor(private http: Http) { }

    login(email: string, password: string) {
        return this.http.post(`${this.conf.apiUrl}/users/authenticate`, { email: email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    //Logout should be Promise, not Observable
    logout(): Promise<any> {
        return Promise.resolve(this.http.post(`${this.conf.apiUrl}/users/invalidate`, {})
            .map((response: Response) => {
                console.log(response.json());
            }));
    }
    
     public isAuthenticated = (): boolean => {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
    }
}