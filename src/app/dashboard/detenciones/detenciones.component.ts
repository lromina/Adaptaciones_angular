import {Component, Input, OnInit,ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Detencion } from '../interfaces/detenciones.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-detenciones',
  templateUrl: './detenciones.component.html',
  styleUrls: ['./detenciones.component.css']
})
export class DetencionesComponent implements OnInit {
 
  // @Input() detencion!: Detencion[]


  detenciones!: Detencion[] 
  displayedColumns: string[] = ['detencion_id', 'fecha', 'ape_nombre', 'dias', 'descripcion', 'delito', 'botones'];
  //dataSource!: MatTableDataSource<Detencion>;
  dataSource = new MatTableDataSource(this.detenciones);
  
  

  // @ViewChild('Paginator') paginator!: MatPaginator;
  //  @ViewChild(MatSort) sort!: MatSort;
 

  constructor(private httpApiService: ApiService) {
    // this.dataSource = new MatTableDataSource(this.detenciones);
   }


  ngOnInit(): void {
    

    this.httpApiService.getDetenciones().subscribe((response)=>{this.detenciones = response;}, 
    error => console.log(error));
    
   
    
  }

  public get orderByFecha(){
    return this.detenciones.sort((a,b) => {      
      return <any>new Date (b.fecha) - <any>new Date (a.fecha);
    })

  
  }

  menoresEdad(){

       this.httpApiService.getDetenciones()
      .subscribe((response)=>{
         this.detenciones = response;
         console.log(response);
        // response.forEach((element: any) => {
        //   console.log(element.detencion_id)
          

        // })

       })
       

       this.calcularEdad()
     }



  calcularEdad(): void{
    this.detenciones.forEach((element: any) => {
    const ahora: Date = new Date();
    const birthDate: Date = new Date(element.persona.fecha_nacimiento);
        let edad: number = ahora.getFullYear() - birthDate.getFullYear();
        const month: number = ahora.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && ahora.getDate() < birthDate.getDate())) {
            edad--;
                  console.log("esta es la edad",edad)
            }                             

        if (edad<18){
              const guardar_id= Number (element.detencion_id);
              console.log("Menor", guardar_id)
              return guardar_id; 
              
           
        } console.log("Mayor")
         return edad;

      })

  }



  // let fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en-US')
 



  // ngAfterViewInit() {
    
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

    
  // }


  //  listDetenciones(){
  //    this.httpApiService.getDetenciones()
  //   .subscribe((response)=>{
  //      this.detenciones = response;
  //      console.log(response);
  //    })
  //  }

}
