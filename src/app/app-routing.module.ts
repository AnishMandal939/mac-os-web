import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootComponent } from './core/boot/boot.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/boot', pathMatch: 'full'
  },
  { path: 'desktop', loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule) },
  { path: 'boot', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '**', redirectTo: '/boot'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
