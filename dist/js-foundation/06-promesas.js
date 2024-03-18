"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const http_client_plugin_1 = require("../plugins/http-client.plugin");
//TODO:06 PROMESAS
// const getPokemonById=(Id,callback)=>{
//     const url =`https://pokeapi.co/api/v2/pokemon/${Id}`
//    fetch(url).then((response)=>{
//     response.json().then(pokemon=>{
//         callback(pokemon.name);
//     });
//    });
// };
//TODO: PROMESAS EN CADENA
// const getPokemonById=(Id,callback)=>{
//     const url =`https://pokeapi.co/api/v2/pokemon/${Id}`
//   return fetch(url)
//    .then((resp)=> resp.json())
//    //.then(()=>{throw new Error("Pokemon no existe")})
//    .then(pokemon=>pokemon.name);
// };
//TODO:ASYNC : convierte la func en una promesa AND AWAIT:Espera a que se resuelva
//  const getPokemonById = async (Id,callback)=>{
//      const url =`https://pokeapi.co/api/v2/pokemon/${Id}`
//      const response = await fetch(url);
//      const pokemon = await response.json();
//      //throw new Error("Pokemon no existe")
//      return pokemon.name;
//  };
//TODO:PATRON ADAPTADOR FECTH API
const getPokemonById = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${Id}`;
        const pokemon = yield http_client_plugin_1.httpClientPlugin.get(url);
        //throw new Error("Pokemon no existe")
        return pokemon.name;
    }
    catch (err) {
        throw (`Pokemon not found with id ${Id}`);
    }
});
exports.getPokemonById = getPokemonById;
