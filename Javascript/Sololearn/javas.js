//This content was compiled from sololearn from the Functions section to ECMAScript 6.

//Expresiones y Operadores
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
//Operadores de asignacion
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Assignment_Operators
//Operadores de comparacion
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators
//Operadores logicos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_lógicos
//Operador condicional ternario
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
/*var nombre="Oscar";
alert("Hola "+nombre)
document.write(nombre);*/

//Condiciones
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else}

//Bucles
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteración
//Funciones
function alertBox(){
  alert("Alert box !");
}
alertBox();

function tripleMulti(a, b ,c) {
  return a*b*c;
}
var resultado = tripleMulti(2, 4 ,7);
document.write(resultado);
document.write("</br>");
//Prompt
var user = prompt("Please enter your name");
document.write("Welcome " + user);
document.write("</br>");
//Confirm
var adios = confirm("Quieres dejar esta pagina?")
if (adios == true){
  document.write("El visitante dejo la pagina")
} else {
  document.write("El visitante permanece en la pagina")
}
document.write("</br>");
//Objetos https://javascript.info/object
//https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos
var person = {
  name: "John", age: 31,
  favColor: "green", height: 183
};
var x = person.age;
var y = person['age'];
document.write(person.favColor.length); //Output 5
document.write("</br>");
//Para construir objetos se usa un constructor
function person1(name, age, color) {
  this.name = name;
  //The this keyword refers to the current object.
  this.age = age;
  this.favColor = color;
}
var p1 = new person1("John", 42, "green");
// Objeto simple
var James = {
  name: "James",
  age: 21
};
//Metodos
function student(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}
var p = new student("David", 21);
p.changeName("John");
//Tambien se puede colocar el metodo afuera
function who(name, age) {
  this.name= name;
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2018 - this.age;
}
var p = new who("A", 22);
document.write(p.yearOfBirth());// Outputs 1996
//Arrays
//Utilizando el concepto de objetos
var cursos = new Array("Mate","Fisica","Biologia");
var cursos2 = new Array(3); //Especifica el numero de elementos permitidos
var cursos3 = ["hola","mundo","!"]; //La forma simplificada
//Propiedades y metodos de Array
document.write(cursos.length); //Output 3
document.write("</br>");
//Concatenar Arrays
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var c3 = c1.concat(c2); //HTML, CSS, JS, C++
//Array index: en vez de crear indices con nombres, esta sintaxis crea Objetos
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);//Outputs "46"
document.write("</br>");
//Math object https://www.w3schools.com/js/js_math.asp
//Date Objects
/*function miAlerta {
  alert("Hi");
}*/
//setInterval(miAlerta, 3000);
var d = new Date();
//d stores the current date and time
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
//setInterval(printTime, 1000);

//DOM https://www.w3schools.com/js/js_htmldom_document.asp
//finds element by id
//var element = document.getElementById(id)

//finds elements by class name
//var element = document.getElementsByClassName(name)  // Cuando son varios los colocar en un array

//finds elements by tag name
//document.getElementsByTagName(name)

//Seleccionando elementos https://developer.mozilla.org/en-US/docs/Web/API/Node
//var arr = a.childNodes; //returns an array of an element's child nodes.
//ejemplo
function reemplazo (){
  var post = document.getElementById("post");
  var arrayPost = post.childNodes;
  arrayPost[1].innerHTML = "Alejandro";
}
//setTimeout(reemplazo,1);//Recordar orden de carga de pagina. Si no se coloca el timeout el navegador solo tendra cargados los scripts y no el HTML. Por lo cual buscara un elemento que no existe aun.

//Cambiando atributos
function enlaceCambio(){
  var en = document.getElementById("prueba1").getElementsByTagName("a")[0];
  en.href ="https://hackaday.io";
}
//Creando y agregando nodos https://www.w3schools.com/js/js_htmldom_nodes.asp
//Ver que es window load
function crearNodo() {
  var para = document.createElement("p");
  var texpara = document.createTextNode("hello world !");
  para.appendChild(texpara);
  //Tambien se puede clonar con cloneNode
  //var caja = document.getElementById("prueba2");
  //caja.appendChild(texpara);
  document.getElementById("prueba2").appendChild(texpara);
}
//Remover elementos
//La funcion cuenta tambien las tabulaciones
function remover() {
  var parentRemove = document.getElementById("post");
  var pRemove = parentRemove.lastChild;
  parentRemove.removeChild(pRemove);
}
//Reemplazar elementos
function replace() {
  var textChild = document.createTextNode("Nuevo");
  var newChild = document.createElement("p");

  newChild.appendChild(textChild);
  var old = document.getElementById("prueba3");
  var oldChild = old.childNodes;
  old.replaceChild(newChild,oldChild[1]);
}
//Eventos
//https://www.w3schools.com/js/js_events.asp
//Se pueden utilizar como onclick pero no es una practica recomendada
/* En este caso show es el handler y onclick el evento
<button onclick="show()">Click Me</button>
<script>
function show() {
  alert("Hi there");
}
</script>

Tambien se pueden asignar a elementos

var x = document.getElementById("demo");
x.onclick = function () {
  document.body.innerHTML = Date();
}
*/
//Event listeners: la practica correcta
//Pueden existir varios handlers e events par el mismo elemento
window.onload = function(){
  var botonEvento = document.getElementById("botEvent");
  botonEvento.addEventListener("click", myHandler);
  botonEvento.addEventListener("mouseover", myHandler);
  
  function myHandler() {
    alert("Hello World!");
  }  
  botonEvento.removeEventListener("mouseover", myHandler);
}
//Event propagation
/*In bubbling, the innermost element's event is handled first
In capturing, the outermost element's event is handled first
Default value is FALSE
true-capturing false-bubbling
elem1.addEventListener("click", myFunction, true); 
*/
//Image slide

//Form validation 
function validate(){
  var num1 = document.getElementById("num1");
  var num2  = document.getElementById("num2");
  if (num1.value == num2.value && (num1.value != "" && num2.value !="")){
    alert("Los valores son iguales");
    return true;
  }
  alert("Los valores deben ser iguales")
  return false;
}
