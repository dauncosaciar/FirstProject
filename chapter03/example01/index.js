const myObj = {};
console.log(myObj);

myObj.firstName = "Daniel Alejandro";
console.log(myObj);

myObj.lastName = "Uncos Aciar";
console.log(myObj);

// myObj = {}; // Error: Una constante no puede ser reasignada.

// console.log("USING LET");
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); // Error: fuera del bloque FOR, i no está definida

console.log("USING VAR");
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);
