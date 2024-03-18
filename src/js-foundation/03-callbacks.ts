export interface User {
    id:number;
    name:string
}
const users:User[] = [
    {id:1,name:"Jhon Doe"},
    {id:2,name:"Jhonne Doe"},
]
//TODO:FORMA ALTERNA
// function getUserById(id){
//     users.find(user=>id===user.id);
// }
 export function getUserById(id:number,callback:(err?:string,user?:User)=>void){
    const user= users.find(function(user) {
        return id===user.id
     });

    if(!user){
        return callback(`USUARIO NO ENCONTRADO ${id}`);
    }
    return callback(undefined,user)
  
 }
module.exports ={
    getUserById
}