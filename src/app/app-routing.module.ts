import { DetencionesComponent } from './dashboard/detenciones/detenciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpedientesComponent } from './dashboard/expedientes/expedientes.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import {ExpandirDetencionComponent} from './dashboard/expandir-detencion/expandir-detencion.component';

const routes: Routes = [
  { path: '', redirectTo: 'reportes', pathMatch: 'full' },
  { path: 'detenciones', component: DetencionesComponent },
  { path: 'expandir/:id', component: ExpandirDetencionComponent},
  { path: 'expedientes', component: ExpedientesComponent },
  { path: 'reportes', component: ReportesComponent },
  
  { path: '**', redirectTo: 'reportes', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
