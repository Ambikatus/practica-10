import {Persona} from  './Persona.js'
import  {Combo} from './Combo.js'
const  benny = new Persona('tilin', 'cadena',68,1.75);
const  tilin = new Persona('pedro', 'flores',89,1.60);
console.log(benny.imc());
console.log(tilin.saludar());
let boton = document.querySelector('#btn1');
boton.addEventListener("click", function(){
    let valores = document.querySelector('#valores').value;
    let arrayValores = valores.split(',') ;
    const colores = new Combo('cmbColores', 'colores', 'text-danger', arrayValores);
    document.getElementById('div1').innerHTML +=colores.mostrar();
} );