import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';

const routes: Routes = [
  {
    path: '',
    component: AllModulesComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },





  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllModulesRoutingModule { }
