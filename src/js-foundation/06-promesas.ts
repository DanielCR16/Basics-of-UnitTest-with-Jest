import {httpClientPlugin as http} from '../plugins/http-client.plugin';

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
 export const getPokemonById = async (Id:string | number):Promise<string>=>{
    try {
        const url =`https://pokeapi.co/api/v2/pokemon/${Id}`
        const pokemon =await http.get(url);
    
        //throw new Error("Pokemon no existe")
        return pokemon.name;
    } 
    catch(err) {
         throw (`Pokemon not found with id ${Id}`)
    }

};


