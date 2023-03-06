import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { DetencionesComponent } from './dashboard/detenciones/detenciones.component';
import { ExpedientesComponent } from './dashboard/expedientes/expedientes.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ExpandirDetencionComponent } from './dashboard/expandir-detencion/expandir-detencion.component';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetencionesComponent,
    ExpedientesComponent,
    ReportesComponent,
    ExpandirDetencionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTooltipModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    RouterModule
 

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
