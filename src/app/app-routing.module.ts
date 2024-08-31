import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule), },
  { path: '', loadChildren: () => import(`./all-modules/all-modules.module`).then(m => m.AllModulesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
