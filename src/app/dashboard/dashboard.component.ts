import { Detencion } from './interfaces/detenciones.interface';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {



 
 

  constructor(private httpApiService: ApiService) {
  }

  ngOnInit(){
    //call this method on component load
    

  }

 




}
