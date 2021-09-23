import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadopacientesComponent } from './components/listadopacientes/listadopacientes.component';
import { VlistaComponent } from './components/listadopacientes/vlista/vlista.component';
import { VtarjetasComponent } from './components/listadopacientes/vtarjetas/vtarjetas.component';
import { FilterTablePipe } from './filtertable.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NuevoPacienteComponent } from './components/nuevo-paciente/nuevo-paciente.component';
import { FichapacienteComponent } from './components/fichapaciente/fichapaciente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadopacientesComponent,
    VlistaComponent,
    VtarjetasComponent,
    FilterTablePipe,
    NuevoPacienteComponent,
    FichapacienteComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
