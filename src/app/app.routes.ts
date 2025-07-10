import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing/landing-page/landing-page.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './features/dashboard/home/home.component';

export const routes: Routes = [{
    path: '', component: LandingPageComponent
},{
    path:'login', component: LoginComponent
},{
    path: 'register', component: RegisterComponent
},{
    path: 'dashboard', component: MainLayoutComponent,
    children: [{
        path: 'home',component: HomeComponent
    },{
        path: '', redirectTo: 'home', pathMatch: 'full'
    }]
}];
