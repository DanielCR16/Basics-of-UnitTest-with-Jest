

import { v4 as uuidv4} from 'uuid';
//TODO: ESTO ES PARTE DEL PATRO ADAPTADOR
//EL PONER COSAS CON DEPENDENCIAS EN OTRO ARCHIVO PARA 
//PODER CAMBIARLO MAS FACIL
export const getUUID=()=>{
    return uuidv4();
}

