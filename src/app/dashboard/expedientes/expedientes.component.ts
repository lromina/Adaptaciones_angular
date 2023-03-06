import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Expediente } from '../interfaces/expediente.interface';


@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})
export class ExpedientesComponent implements OnInit {

  expedientes!: Expediente[] 
  displayedColumns: string[] = ['id', 'causa_cod', 'caratula', 'nro_audiencias', 'registrado'];
  dataSource = this.expedientes;


 
  constructor(private httpApiService: ApiService) { }

  ngOnInit(): void {

    this.httpApiService.getExpedientes()
    .subscribe((response)=>{
       this.expedientes = response;
     })
  }

  // listDeExpedientes(){
  //   this.httpApiService.getExpedientes()
  //  .subscribe((response)=>{
  //     this.expedientes = response;
  //   })
  // }

}
