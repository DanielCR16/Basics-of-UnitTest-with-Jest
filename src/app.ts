//import { emailTemplate } from './js-foundation/01-template';
//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById} = require('./js-foundation/03-callbacks');
//const {getUserArrowById} = require('./js-foundation/04-arrow')
/////////////////////////////
// const {getAge,getUUID} =require('./plugins');
// const {buildMakePerson} = require('./js-foundation/05-factory');
// const {getPokemonById} = require('./js-foundation/06-promesas')
// const {buildLogger} = require('./plugins')

import { buildLogger } from "./plugins/logger.plugin";


//TODO:EJEMPLO DE CALLBACK EJERCICIO 03 y 04 volvielos arrow functions
// const id=2;
// getUserArrowById(id,(error,user)=>{
//     if(error) throw new Error(error);
    
//     console.log(user);
// });

//TODO:Factory functions 05
//TODO:tambien es una inyeccion de dependencias {getUUID,getAge}
// const makePerson = buildMakePerson({getUUID,getAge});

// const obj = { name:'Daniel',birthDate:'1998-10-21'};
// const daniel=makePerson(obj);
// console.log(daniel);

//TODO:PROMESAS 06
// getPokemonById(4).then(pokemon=>console.log({pokemon}))
// .catch((err)=>console.log('ERROR Intenta otra vez'))
// .finally(()=>console.log('Finalmente'));

//TODO:LOGGER
//const logger = buildLogger('app,js');
//logger.log('hola mundo');
//logger.error('Esto es algo malo');
