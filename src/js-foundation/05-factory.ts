//TODO:LAS 2 IMPORTACIONES FUERON MIGRADAS A SU PROPIO ARCHIVO POR EL PATRON ADAPTADOR
//const { v4: uuidv4 } = require('uuid');
//const getAge=require('get-age');
//const {getAge,getUUID} =require('../plugins')

interface BuildMakerPersonOptions {
    getUUID:()=>string;
    getAge:(birthDate:string)=>number;
}
interface PersonOptions {
    name:string;
    birthDate:string
}
export const buildMakePerson = ({getUUID,getAge}:BuildMakerPersonOptions)=>{
    return  ({name,birthDate}:PersonOptions) =>{
        return {
            id:getUUID(),
            name,
            birthDate,
            age:getAge(birthDate),
        }
    
    }
}


// const obj = { name:"John",birthDate:'1998-01-16'};
// const john = buildPerson(obj);
// console.log(john)  
