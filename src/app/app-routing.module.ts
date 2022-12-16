import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewloginComponent } from './newlogin/newlogin.component';

import { PolicyComponent } from './policy/policy.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './_auth/auth.guard';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: NewloginComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'search', component: SearchComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  { path: 'home', component: HomeComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'policy', component: PolicyComponent ,canActivate:[AuthGuard],data:{roles:['Admin']} },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
