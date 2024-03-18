"use strict";
//TODO:LAS 2 IMPORTACIONES FUERON MIGRADAS A SU PROPIO ARCHIVO POR EL PATRON ADAPTADOR
//const { v4: uuidv4 } = require('uuid');
//const getAge=require('get-age');
//const {getAge,getUUID} =require('../plugins')
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthDate }) => {
        return {
            id: getUUID(),
            name,
            birthDate,
            age: getAge(birthDate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name:"John",birthDate:'1998-01-16'};
// const john = buildPerson(obj);
// console.log(john)  
