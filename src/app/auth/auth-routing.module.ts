import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-in', component: LoginComponent },
  // { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'sign-up', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
