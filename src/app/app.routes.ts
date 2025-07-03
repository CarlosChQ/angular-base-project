import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing/landing-page/landing-page.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [{
    path: '', component: LandingPageComponent
},{
    path:'login', component: LoginComponent
},{
    path: 'register', component: RegisterComponent
}];
