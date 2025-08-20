import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

//routing components declared
export const routes: Routes = [
    //{path:'Login', component:LoginComponent},
    {path:'Login', loadComponent:()=>
        import('./login/login.component').then((c)=>c.LoginComponent // lazy loading setup
    )},
    {path:'Profile', component:ProfileComponent},
    {path:'Profile/User/:name/:Id',component:UserComponent}, // dynamic routes
    {path:'', component: AppComponent},
    {path:'**', component:PageNotFoundComponent} // wildcard component
    // do keep the page not found at the last
    //angular will match the route then at first with this and provide the result
];

