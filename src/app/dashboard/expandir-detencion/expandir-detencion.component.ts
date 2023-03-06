import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Detencion } from '../interfaces/detenciones.interface';

 

@Component({
  selector: 'app-expandir-detencion',
  templateUrl: './expandir-detencion.component.html',
  styleUrls: ['./expandir-detencion.component.css']
})
export class ExpandirDetencionComponent implements OnInit {

  expancion: Detencion[] =[]
  expandir:any 
  id: number=0;
 
  constructor(private Activatedroute: ActivatedRoute,
              private _router: Router,
              private ApiService: ApiService 
              ) {

              

              }

  


  

  ngOnInit(): void {

    this.Activatedroute.params.forEach((params:Params) => {
      let id = params['id']
      this.id = id
      // console.log(this.id)
    })

    this.mostrar_Detalle();

       

  

  }

  mostrar_Detalle(){ 
   
      this.ApiService.getDetenciones()
        .subscribe((data)=>{
           this.expancion = data;
          //  console.log(this.expancion)
        
      this.expandir = this.expancion.find(e => e.detencion_id == this.id) 
      // console.log(this.expandir)   
    })     
   
    
  }


  

  onBack(): void {
    this._router.navigate(['/detenciones']);

  }


 
}
