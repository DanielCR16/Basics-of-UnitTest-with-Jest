//console.log(process);
console.log(process.env);
const {SHELL,USERNAME,npm_config_npm_version} = process.env;
console.log(SHELL);
console.log(USERNAME);
console.log(npm_config_npm_version);
console.table({npm_config_npm_version,USERNAME});

export const characters = [ 'Flash','Batman','Superman'];
const [ _,__,superman] =characters;
console.log(superman);