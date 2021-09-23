import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-fichapaciente',
  templateUrl: './fichapaciente.component.html',
  styleUrls: ['./fichapaciente.component.css']
})
export class FichapacienteComponent implements OnInit {
  @Input() fichapacienteobj: any | undefined;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.fichapacienteobj)
  }

  async generarPDF(){
    const documentDefinition = {
      content: [
		
        {
          
          table: {
            widths: [240, '*', '*'],
            body: [
              [{rowSpan: 4,image: await this.getBase64ImageFromURL('../../../assets/elusuario.jpg'),
          width: 150,alignment: 'center'}, 
          {text: this.fichapacienteobj.ficha_dental.clinica, colSpan:2}, '' ],
              
              ['', 
              {text: this.fichapacienteobj.datos_paciente.nombre, italics: true, colSpan:2}, 
              {text: '', italics: true}
              ],
              
              ['', 
              {text: this.fichapacienteobj.datos_paciente.apellidos, italics: true,colSpan:2}, 
              {text: '' }
              ],
              
              ['', 
              {text: this.fichapacienteobj.datos_paciente.sexo}, 
              {text: this.fichapacienteobj.datos_paciente.fecha_nacimiento}
              ]
            ]
          }
        },
        {
          
          table: {
            widths: [240, '*'],
            body: [
                [{text: 'Dientes No Mover'}, 
              ''
              ],
              
              [{rowSpan: 8,image: await this.getBase64ImageFromURL('../../../assets/maxilar.jpg'),
          width: 300,alignment: 'center'},
          {text: this.fichapacienteobj.ficha_dental.estado} ],
              
              ['', 
              {text: this.fichapacienteobj.ficha_dental.objetivo_tratamiento}
              ],
              
              ['', 
              {text: 'RECORTE DE ALINEADORES',border: [false, false, true, false]}
              ],
              ['', 
              {text: this.fichapacienteobj.ficha_dental.otros_datos.recorte_alineadores,border: [false, false, true, true]}
              ],
              ['', 
              {text: '¿Desea alineadores pasivos?',border: [false, false, true, false]}
              ],
              
              ['', 
              {text: this.fichapacienteobj.ficha_dental.otros_datos.alineadores_pasivos ? 'Si':'No',border: [false, false, true, true]}
              ],
              ['', 
              {text: '¿Desea SecretRetainer al finalizar?',border: [false, false, true, false]}
              ],
              
              ['', 
              {text: this.fichapacienteobj.ficha_dental.otros_datos.secretretainer ? 'Si':'No',border: [false, false, true, true]}
              ]
            ]
          }
        },
        
      ],
      
    }
    pdfMake.createPdf(documentDefinition).open();
  }
  @Output() resolver= new EventEmitter() 
  cerrar(){
    this.resolver.emit("cerrar")
  }

  getBase64ImageFromURL(url:any) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
    
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx:any = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/png");
    
        resolve(dataURL);
      };
    
      img.onerror = error => {
        reject(error);
      };
    
      img.src = url;
    });}
}
