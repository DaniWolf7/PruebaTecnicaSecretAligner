import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vlista',
  templateUrl: './vlista.component.html',
  styleUrls: ['./vlista.component.css']
})
export class VlistaComponent implements OnInit {
  @Input() pacientesArr: any | undefined;
  @Input() config: any | undefined;
  
  constructor() { 
   
  }

  ngOnInit(): void {
    
  }
  checkEstado(estado:string){
    switch (estado) {
      case "planificando":
        return {"red":true}
        break;
      case "facturado":
        return {"orange":true}
        break;
      case "enviado":
        return {"green":true}
        break;
      case "solicitado":
        return {"yellow":true}
        break;
      case "fabricando":
        return {"blue":true}
        break;
    
      default:
        return {"white":true}
        break;
    }
  }
  mostrar(i:any){
    var myElement:any = document.querySelector( '#accionesel_'+i );
    if(myElement){
      myElement.classList.add('flexible');
    }

  }
  nomostrar(i:any){
    var myElement:any = document.querySelector( '#accionesel_'+i );
    if(myElement){
      if(myElement.classList.contains("flexible")){
        myElement.classList.remove("flexible")
      }
      
    }

  }
  @Output() verpaciente= new EventEmitter() 
  
  verdetalle(paciente:any){
    this.verpaciente.emit(paciente)
  }

}
