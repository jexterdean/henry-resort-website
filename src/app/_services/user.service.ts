import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';
import { Configuration } from '../app.constants';

@Injectable()
export class UserService {
    private conf = new Configuration();
    
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(`${this.conf.apiUrl}/api/users`, this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(`${this.conf.apiUrl}/api/users/` + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(`${this.conf.apiUrl}/api/users`, user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(`${this.conf.apiUrl}/api/users/` + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(`${this.conf.apiUrl}/api/users/` + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}