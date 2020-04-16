import singleton from "./singleton";


let a = singleton.getInstance()
let b = singleton.getInstance()

console.log('a es igual a b', a == b);
