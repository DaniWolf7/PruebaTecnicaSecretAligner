export interface paciente {
    "datos_paciente":{
        "nombre": string,
        "apellidos": string,
        "fecha_nacimiento": string,
        "sexo": string
    },
    "ficha_dental":{
        "acadas_tratamiento": string,
        "dientes_no_mover": number[],
        "estado": string,
        "clinica": string, 
        "objetivo_tratamiento": string,
        "otros_datos": {
            "recorte_alineadores":string,
            "alineadores_pasivos":boolean,
            "secretretainer":boolean
        }
    }
}