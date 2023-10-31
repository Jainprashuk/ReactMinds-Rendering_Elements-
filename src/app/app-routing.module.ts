import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NessecaryreactupdatesComponent } from './mycomponents/nessecaryreactupdates/nessecaryreactupdates.component';
import { UpdatingelementComponent } from './mycomponents/updatingelement/updatingelement.component';
import { RenderingintodomComponent } from './mycomponents/renderingintodom/renderingintodom.component';

const routes: Routes = [
  { path: '', component: RenderingintodomComponent, outlet: 'secondary' },
  { path: 'UpdatingelementComponent', component: UpdatingelementComponent, outlet: 'secondary' },
  { path: 'RenderingintodomComponent', component: RenderingintodomComponent, outlet: 'secondary' },
  { path: 'nessecaryreactupdates', component: NessecaryreactupdatesComponent, outlet: 'secondary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
