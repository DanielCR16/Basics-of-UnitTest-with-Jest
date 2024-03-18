const getAgePlugin=require('get-age');

//TODO: ESTO ES PARTE DEL PATRON ADAPTADOR
export const getAge=(birthDate:string)=>{
    //return getAgePlugin(birthDate)

    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}

