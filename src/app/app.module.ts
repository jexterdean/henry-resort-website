import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule, ModalModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { AuthGuard } from './_guards/index';

/*For Routing*/
import { routing } from './app.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AlertModule, 
        DatepickerModule, 
        ModalModule,
        routing
    ],
    providers: [
        AlertService, 
        AuthenticationService, 
        UserService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
