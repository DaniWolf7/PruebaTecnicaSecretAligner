import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vtarjetas',
  templateUrl: './vtarjetas.component.html',
  styleUrls: ['./vtarjetas.component.css']
})
export class VtarjetasComponent implements OnInit {
  @Input() pacientesArr: any | undefined;
  @Input() config: any | undefined;

  constructor() { }

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
  
}
