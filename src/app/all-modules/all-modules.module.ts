import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { AllModulesRoutingModule } from './all-modules-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    AllModulesRoutingModule
  ]
})
export class AllModulesModule { }
