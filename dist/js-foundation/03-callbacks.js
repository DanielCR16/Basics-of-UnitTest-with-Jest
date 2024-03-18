"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    { id: 1, name: "Jhon Doe" },
    { id: 2, name: "Jhonne Doe" },
];
//TODO:FORMA ALTERNA
// function getUserById(id){
//     users.find(user=>id===user.id);
// }
function getUserById(id, callback) {
    const user = users.find(function (user) {
        return id === user.id;
    });
    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`);
    }
    return callback(undefined, user);
}
exports.getUserById = getUserById;
module.exports = {
    getUserById
};
