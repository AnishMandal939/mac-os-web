import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BootComponent } from './boot/boot.component';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { MachineControlsComponent } from './machine-controls/machine-controls.component';


@NgModule({
  declarations: [
    BootComponent, 
    LoginComponent,
    MachineControlsComponent
  ],
  imports: [
   
    CoreRoutingModule,
    SharedModule
  ],
  exports:[BootComponent]
})
export class CoreModule { }
