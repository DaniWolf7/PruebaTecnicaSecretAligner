import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnica';

  vermodal= false;
  newpaciente=false;
  fichapaciente=false;

  fichapacienteobj=null

  resolver(e:any){
    switch (e) {
      case "cerrar":
        this.vermodal= false;
        this.newpaciente= false;
        this.fichapaciente=false;
        break;

      case "newpaciente":
        this.vermodal= true;
        this.newpaciente= true;
        this.fichapaciente=false;
        break;
        case "fichapaciente":
        this.vermodal= true;
        this.newpaciente= false;
        this.fichapaciente=true;
        break;

      default:
        this.vermodal= false;
        this.newpaciente=false;
        this.fichapaciente=false;
        break;
    }
  }

  verpaciente_(obj:any){
    this.fichapacienteobj= obj
    this.resolver("fichapaciente")
  }
}
