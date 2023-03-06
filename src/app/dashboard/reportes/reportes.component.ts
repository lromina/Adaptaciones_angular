import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  
  total_detenciones:number = 0;
  total_audiencias:number = 0;
  ultimo_movimiento:Date | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  calcularReporte(): void{
    console.log('calcular Reporte Totales')
  }


}
