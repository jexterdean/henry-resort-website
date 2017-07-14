import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/index';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router, private auth: AuthenticationService) { }

    ngOnInit() {
        if (this.auth.isAuthenticated()) {
            console.log('is Authenticated');
        }
    }

    logout(event) {
        console.log('Logging out');
        this.auth.logout().then(function() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
        });

    }

}
