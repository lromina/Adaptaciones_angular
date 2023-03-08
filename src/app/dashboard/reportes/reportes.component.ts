import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Detencion } from '../interfaces/detenciones.interface';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  detenciones!: Detencion[] 
  total_detenciones:number = 0;
  total_audiencias:number = 0;
  ultimo_movimiento:Date | undefined;

  click:boolean=false;

  constructor(private httpApiService: ApiService) { }

  ngOnInit(): void {
    this.httpApiService.getDetenciones().subscribe((response)=>{this.detenciones = response;}, 
    error => console.log(error));

  }

  calcularReporte(): void{
    console.log('calcular Reporte Totales')
    console.log (this.detenciones.length)
  }

  guardarReporte(){
    

  }


}
