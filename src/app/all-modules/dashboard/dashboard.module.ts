import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
