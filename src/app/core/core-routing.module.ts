import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootComponent } from './boot/boot.component';

const routes: Routes = [
  {path:'', component:BootComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
