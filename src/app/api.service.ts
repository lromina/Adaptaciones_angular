import { Detencion } from './dashboard/interfaces/detenciones.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  find(arg0: (p: any) => boolean): any {
    throw new Error('Method not implemented.');
  }

  detenciones!: Detencion[] 
 
  constructor(private httpClient: HttpClient) { }



  getDetenciones(): Observable<Detencion[]>{
    return this.httpClient.get<Detencion[]>(`${environment.baseURL}detenciones.json`);
  }


  getExpedientes(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.baseURL}expedientes.json`);
  }





  // getExpancion():Detencion[] { 
  //   return this.detenciones;
    
  // }

  // getExpandir(id:number){
  //   let detenciones: Detencion[] = this.getExpancion();
  //   return detenciones.find((e) => e.detencion_id == id )

  // }

  


  


}
