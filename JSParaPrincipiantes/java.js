/*document.writeln("<h1>Hola mundo</h1>"); 
console.log("Hola");
console.error("hay un error");
//Tipos de datos en js

// Cadenas

"Hola mundo" //String

'Hola mundo' // String

//númerico
1000
-2.34

//Boolean
true  // Verdadero
false // Falso

// Array

["Victor","Juan","Jairo"];
[1,2,3];
[true,false,true,false];

//Objecto
 
console.log({
   "username": 'ryan',
    "score": 70.4,
    "hours":14,
    "Proffesional": true
});
*/

// Variables
var name = "Victor";
console.log(name);
let name2 = "Miguel";
console.log(name2);
const PI = 3.1416;
console.log(PI);

//Suma de dos números
let num1 = 10;
let num2 = 20;

let result = num1 + num2;
console.log(result);

let nameresult = name + name2;
console.log(nameresult);

result = num1 == name2;
console.log(result);


if(result === true){
    console.log("login correcto");
}else{
    console.log("Contraseña incorrecto");
}

let puntuacion = 30;
if(puntuacion > 30){
  console.log("Necesitas practicar más");
}else{
  console.log("Necesitas ver un tutorial")
}