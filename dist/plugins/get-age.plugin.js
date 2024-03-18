"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgePlugin = require('get-age');
//TODO: ESTO ES PARTE DEL PATRON ADAPTADOR
const getAge = (birthDate) => {
    //return getAgePlugin(birthDate)
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
};
exports.getAge = getAge;
