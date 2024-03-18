import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { DesktopComponent, LaunchpadComponent, TerminalComponent } from './containers';
import { DockComponent, MenuComponent } from './components';
import { SharedModule } from '../shared/shared.module';

const components = [
  DesktopComponent,
  DockComponent,
  MenuComponent,
  LaunchpadComponent,
  TerminalComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SharedModule
  ]
})
export class ApplicationsModule { }
