console.log('hello type');



// boolean 

let muted: boolean = true;
muted= false

//numeros

let numerador:number = 42 
let denominador:number = 6
let resultado = numerador/denominador

// string

let nombre: string = 'robert'

//arreglos 

let people: string[] = []
people = ['robert','nicole']
people.push('9000')

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('robert')
peopleAndNumbers.push(1)

// enum

enum Color{
    rojo = 'rojo',
    verde= 'verde',
    azul= 'azul',
}

let colorfavorito:Color = Color.rojo
console.log(`mi color favorito es ${colorfavorito}`);
 //any
let comodin: any = 'joker'
comodin = { type: 'wildcard' }

// object
let someObject: object = { type: 'wildcard' }

// funciones

function add(a: number,b:number):number{
    return a+b
}

const suma = add(4,5)

function createAdder(a:number) : (number)=>number {
    return function (b:number) {
        return b+a
    }
}

const addFour = createAdder(4)
const fourplus6= addFour(6)

function fullName(fN:string,lN:string = 'ruiz'):string {
    return `${fN} ${lN}`
}

const robert= fullName('robert')

console.log(robert);

//interfaces 

interface retangulo{
    ancho:number
    alto:number
    color?:Color
}

let rec:retangulo={
    ancho:4,
    alto:6,
    color:Color.rojo,
}

function area(r:retangulo){
    return r.alto* r.ancho
}

const areaRect= area(rec)
console.log(areaRect);

rec.toString = function () {
    return this.color ? `un rectangulo ${this.color}` : `un rectangulo`

}

console.log(rec.toString());


