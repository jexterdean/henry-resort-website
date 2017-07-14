import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CanActivateGuard } from './services/guard.service';
import { AuthGuard } from './_guards/auth.guard';

// Components
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    // Root
    {
        component: HomeComponent,
        path: ''
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },    
    { 
    canActivate: [AuthGuard],
    path: 'dashboard', 
    component: DashboardComponent 
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
