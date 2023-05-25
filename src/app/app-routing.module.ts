import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { LoginComponent } from './login/login.component';
import { GererComponent } from './admin/gerer/gerer.component';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddMasterComponent } from './admin/addMaster/addMaster.component';
import { RequestComponent } from './admin/request/request.component';

const routes: Routes = [
  {path: '', component: DashboardAdminComponent},
  {path:'dashboard-admin', component: DashboardAdminComponent},
  {path: 'gerer', component: GererComponent},
  {path: 'demande', component:RequestComponent},
  {path: 'add', component:AddMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
