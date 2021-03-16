// EcmaScript es una nueva sintaxis de Javascript que en un muchas ocasiones es más simple de utilizar

//ES6
//ECMAScript has 3 different ways of declaring variables
var a = 10;
const b = 'hello';
//let declara variables limitadas al scope to the block, statement, o expression en el que se utilizan
let c = true; //Se recomienda para ciclos for
//Template literals
let nombre1 = 'Oscar';
//Tomar nota a lo que encierra msg. No son comillas normales
let msg = `Welcome ${nombre1} !`;
console.log(msg);

//Loops
//for in
let obj = {a: 1, b: 2, c: 3};
for (let v in obj){
  console.log(v);
}
//for of
let list = ["X", "Y", "Z"];
for (let val of list) {
  console.log(val);
}
//for strings
for (let ch of "Hello"){
  console.log(ch);
}

//Functions (Arrow functions)
//https://code.sololearn.com/WGNbcu840MY1/?ref=app#html
//Sintaxis comun
const add = (a, b) =>{
  let c = a+b;
  console.log(c);
}
add(3, 4); //7
//Cuando solo se maneja un parametro no son necesarios los parantesis
const greet = x => 'Welcome ' + x;
alert(greet('Oscar'));
//Cuando no utiliza parametros se colocan parentesis
const greet2 = () => console.log('Hola');
greet2();
//Function expressions
var arr2 = [2, 3, 7, 9];
arr2.forEach(v => {
  console.log(v*2)
});
//Default values
const test = (a, b=3, c=42) =>{
  return a+b+c;
}
console.log(test(5)); //50
//Objetos
let tree = {
  height: 10,
  color: 'green',
  grow(){
    this.height += 2;
  }
};
tree.grow();
console.log(tree.height); //12
//las variables se pueden iniciar antes
let heightA = 5;
let health = 100;
let athlete = {
  heightA,
  health
};
//Computed property names
let prop = 'name';
let id = '1234';
let mobile = '708923';

let usuario = {
  [prop]: 'Jack',
  [`usuario_${id}`]: `${mobile}` // Observar las comillas utilizadas en estos casos
};
console.log(usuario.name); // Jack
console.log(usuario.usuario_1234); // 08923
//Ejemplo 2
var param = 'size';
var config = {
  [param]: 12,
  ['mobile'+ param.charAt(0).toUpperCase() + param.slice(1)]: 4,
};
console.log(config.mobileSize); //4
console.log(config.size); //12
// Object.assign()
// En este caso para crear un objeto utiliza las propiedades de otros. Cuando existen dos parámetros llamados de la misma forma el valor que queda es del último parámetro.
let personA = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let studentA = {
  name: 'Bob',
  age: 20,
  xp: 2
};
let newStudent = Object.assign({}, person, student); // {} es el objetivo y person y student son los parámetros
console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2
// Tambien se puede utilizar para duplicar un objeto sin generar mutación
let newPerson = Object.assign({}, personA,{name: 'Alex'});
console.log(newPerson.name);
console.log(personA.name);

// Destructuring Arrays
let arrDest = [1, 2, 3];
let [one, two, three] = arrDest;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

let ax = () => {
  return [4, 5, 6];
};
let [uno, , tres] = ax();
console.log(one);
console.log(three);

// Destructuring Objects
let objA = {h: 100, s: true};
let {h, s} = objA;
console.log(h); // 100
console.log(s); // true

let o = {o1: 55, o2: true};
let {o1: foo, o2: paa} = o; // Los nombres de los parametros deben de ser los mismos de lo contrario se obtiene un valor indefinido
console.log(foo);
//console.log();