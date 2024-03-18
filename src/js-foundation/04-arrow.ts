import { User } from "./03-callbacks";

const users :User[]= [
    {id:1,name:"Jhon Doe"},
    {id:2,name:"Jhonne Doe"},
]
//TODO:FORMA ALTERNA
// function getUserById(id){
//     users.find(user=>id===user.id);
// }
//  function getUserById(id,callback){
//     const user= users.find(function(user) {
//         return id===user.id
//      });

//     if(!user){
//         return callback(`USUARIO NO ENCONTRADO ${id}`);
//     }
//     return callback(null,user)
  
//  }
 export const getUserArrowById = (id:number,callback:(err?:string,user?:User)=>void)=>{
    const user = users.find(user=>user.id ===id);

  return  user ? callback(undefined,user) :callback(`USUARIO NO ENCONTRADO EN EL ARROW ${id}`);
 }
