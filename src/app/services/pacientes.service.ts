import { Injectable } from '@angular/core';
import pacientList from "src/assets/pacientes.json"

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  

  constructor() { }

  getList(){//el json es un objeto, esta funcion lo transformará en array de objetos
    var pacientobj = pacientList
    var pacientArr:any = Object.values(pacientobj)
    for (let index = 0; index < pacientArr.length; index++) {
      var elemento = pacientArr[index];
      var iniciales = this.getiniciales(elemento.datos_paciente.nombre,elemento.datos_paciente.apellidos)
      pacientArr[index].iniciales = iniciales
    }
    

    return pacientArr
  }
  getiniciales(a:string,b:string){
    var n = a.slice(0,1).toUpperCase() + b.slice(0,1).toUpperCase()
    return n
  }

}
