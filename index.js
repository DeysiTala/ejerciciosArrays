var assert = require("assert");

//ejercicio 1
var numeros= [4,4,5,12];
 var entero = 9;
 var multiplicacion= numeros.reduce(function(resultado,numero2)
 {
 return resultado*numero2;
 });

 document.write(multiplicacion*entero);

 //ejercicio 2

 function ejercicio2(_telefonos,_filtro)
 {
      return _telefonos.filter(function(a){
       var primera = a.toString().substr(0,3);
       var ultimas = a.toString().substr(6);
       return (primeras == filtro|| ultimas ==_filtro);
     });
//ejercicio 3
var lista = [7,21,44,80,77,35];
var num = [];
lista.forEach(function multiplos(valor,index,lista){
  if(valor % 7 == 0)
  {num.push(valor)};
  return num;
});
console.log(num);
//ejercicio 4
var lista = [2, 5, 7, 2, 3, 8,10]
var respuesta = lista.map( function (numero) {
  return (numero * 2) + 1;
})

console.log(respuesta);
//ejercicio 5

//ejercicio 6
var numeros= [1,2,3,4];

 var multiplicacion= numeros.reduce(function(resultado,numero2)
 {
 return resultado*numero2;
 });
 
 console.log(multiplicacion);
//ejercicio 7
