import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { ExportToCsv } from 'export-to-csv';
@Component({
  selector: 'app-listadopacientes',
  templateUrl: './listadopacientes.component.html',
  styleUrls: ['./listadopacientes.component.css']
})
export class ListadopacientesComponent implements OnInit {
  pacientesArr:any
  paginas:any

  config={
    text: "",
    maxnum: 5,
    pag:1,
    vista:"tabla"//tarjetas
  }

  constructor(private ps: PacientesService) {
    this.pacientesArr = this.ps.getList()
      var length = this.pacientesArr.length
      var tot = length/ this.config.maxnum
      var numpags = Math.floor(tot)
      if((tot-numpags) > 0){
        numpags++
      }
      this.paginas = []
      for (let index = 0; index < numpags; index++) {
        this.paginas.push(index+1)
        
      }
   }
  
  ngOnInit(): void {
    
  }
  changeNPages(n:number){
    this.config.maxnum = n

    var length = this.pacientesArr.length
    
      var tot = length/ this.config.maxnum
      var numpags = Math.floor(tot)
      if((tot-numpags) > 0){
        numpags++
      }
      this.paginas = []
      for (let index = 0; index < numpags; index++) {
        this.paginas.push(index+1)
      }
      if(this.paginas.length < this.config.pag){
        this.changetoPage(this.paginas[this.paginas.length-1])
      }
      if(this.config.text != ""){
       this.update()
      }

  }
  changetoPage(n:number){
    this.config.pag = n
  }
  update(){
    var arr=[]
    if(this.config.text != ""){
      this.config.text = this.config.text.toLowerCase()
      

      for (let index = 0; index < this.pacientesArr.length; index++) {
          var el = this.pacientesArr[index]
          
          if(el.datos_paciente.nombre.toLowerCase().indexOf(this.config.text)!=-1 || el.datos_paciente.apellidos.toLowerCase().indexOf(this.config.text)!=-1){
            arr.push(el)
          }
          
      }
    }else{
      arr= this.pacientesArr
    }
    
    var length = arr.length
    
      var tot = length/ this.config.maxnum
      var numpags = Math.floor(tot)
      if((tot-numpags) > 0){
        numpags++
      }
      this.paginas = []
      for (let index = 0; index < numpags; index++) {
        this.paginas.push(index+1)
      }
      
      this.changetoPage(1)
      


  }
  changevista(string:string){
    switch (string) {
      case "tarjetas":
        this.config.vista= "tarjetas"
        break;
      case "tabla":
          this.config.vista= "tabla"
        break;
      default:
        this.config.vista= "tabla"
        break;
    }
  }

  @Output() resolver= new EventEmitter() 
  openNewPaciente(){
    this.resolver.emit("newpaciente")
  }
  
exportCSV(){
    var datatoexport:any= [];
    for (let index = 0; index < this.pacientesArr.length; index++) {
      var element = this.pacientesArr[index];
      var el={
        nombre: element.datos_paciente.nombre,
        apellidos: element.datos_paciente.apellidos,
        clinica: element.ficha_dental.clinica,
        objetivo_tratamiento: element.ficha_dental.objetivo_tratamiento,
        estado: element.ficha_dental.estado,
      }
      datatoexport.push(el)

    }
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'CSV pacientes',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    
    }

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(datatoexport);

}

/*Alternativa para descarga de csv

exportCSV(){
    var datatoexport:any= [];
    for (let index = 0; index < this.pacientesArr.length; index++) {
      var element = this.pacientesArr[index];
      var el={
        nombre: element.datos_paciente.nombre,
        apellidos: element.datos_paciente.apellidos,
        clinica: element.ficha_dental.clinica,
        objetivo_tratamiento: element.ficha_dental.objetivo_tratamiento,
        estado: element.ficha_dental.estado,
      }
      datatoexport.push(el)

    }
    var Head = ['nombre', 'apellidos', 'clinica', 'objetivo_tratamiento', 'estado'];

    datatoexport.unshift(Head);
    // Convert Object to JSON
    var jsonObject = JSON.stringify(datatoexport);

    if (typeof jsonObject != 'object') {
      var array:any = JSON.parse(jsonObject);
  } else {
      var array:any = jsonObject;
  }
  var str = '';

  for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') { line = line + ',' }

          line = line + array[i][index];
      }

      str = str + line + '\r\n';
  }

  var exportedFilename = 'Pacientes.csv' || 'export.csv';

        var blob = new Blob([str], { type: 'text/csv;charset=utf-8;' });
        
            var link = document.createElement("a");
            if (link.download !== undefined) { 
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            
        }




}

*/


@Output() verpaciente_= new EventEmitter() 
verpaciente(obj:any){
  this.verpaciente_.emit(obj)
}

}
