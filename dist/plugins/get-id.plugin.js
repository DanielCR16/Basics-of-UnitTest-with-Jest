"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const uuid_1 = require("uuid");
//TODO: ESTO ES PARTE DEL PATRO ADAPTADOR
//EL PONER COSAS CON DEPENDENCIAS EN OTRO ARCHIVO PARA 
//PODER CAMBIARLO MAS FACIL
const getUUID = () => {
    return (0, uuid_1.v4)();
};
exports.getUUID = getUUID;
