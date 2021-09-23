import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "filtertable",pure:false})

export class FilterTablePipe implements PipeTransform{
    transform(items:any[],filter:any):any{
        
        
        if(!items || !filter){
            return items
        }
        
        //filtrarnombre *contiene las palabras *case independent
        if(filter.text != ""){
            filter.text = filter.text.toLowerCase()
            var result=[]

            for (let index = 0; index < items.length; index++) {
                var el = items[index]
                
                if(el.datos_paciente.nombre.toLowerCase().indexOf(filter.text)!=-1 || el.datos_paciente.apellidos.toLowerCase().indexOf(filter.text)!=-1){
                    result.push(el)
                }
                
            }
             
            
        }else{
            result= items
        }
        
        //items per page
        var resultcut= []
        if(result && result.length > 0){
            var fin = filter.maxnum * filter.pag
            var ini =fin - filter.maxnum
            resultcut = result.slice(ini, fin)
        }
        return resultcut

    }
}