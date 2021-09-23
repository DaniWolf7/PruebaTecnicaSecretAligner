import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { paciente } from 'src/app/interfaces';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})
export class NuevoPacienteComponent implements OnInit {


  
    registerForm = this.fb.group({
      nombre: [ '', [Validators.required]],
      apellidos: [ '', [Validators.required]],
      fecha_nacimiento: [ Date.now(), [Validators.required]],
      sexo: [ null, [Validators.required]],
      clinica: [ '', [Validators.required]],
      recorte_alineadores: [ null, [Validators.required]],
      secretretainer: [ null, [Validators.required]],
      
      

    })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }
  myformat(date:Date){
    var stri= date.toLocaleDateString('en-GB')
    return stri
  }
  registerPaciente(){
    var newpaciente:paciente ={
      "datos_paciente":{
        "nombre": this.registerForm.value.nombre,
        "apellidos": this.registerForm.value.apellidos,
        "fecha_nacimiento": this.myformat(this.registerForm.value.fecha_nacimiento),
        "sexo": this.registerForm.value.sexo
      },
      "ficha_dental":{
        "acadas_tratamiento": "ambas",
        "dientes_no_mover": [],
        "estado": "planificando",
        "clinica": this.registerForm.value.clinica, 
        "objetivo_tratamiento": "Estética y Oclusión",
        "otros_datos": {
          "recorte_alineadores":this.registerForm.value.recorte_alineadores,
          "alineadores_pasivos":true,
          "secretretainer":this.registerForm.value.secretretainer
        }

      }
    }
    console.log(newpaciente)//enviar al backend
    
  }
  @Output() resolver= new EventEmitter() 
  cerrarmodal(){
    this.resolver.emit("cerrar")
  }
  reset(){
    this.registerForm.reset()
    console.log("yeah")
  }
}
