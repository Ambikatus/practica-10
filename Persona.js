export class Persona{
    //Atributos y metodos
    nombre =  '';
    apellido= '';
    peso = 0;
    altura = 0;

    constructor(nombre, ape, p, a){
        //this hace referencia al atributo de la clase en el metodo
        this.nombre = nombre;
        this.apellido = ape;
        this.peso = p;
        this.altura = a;
    }

    saludar(){
        return 'Hola soy ' + this.nombre + ' '+ this.apellido;    
    }

    imc(){
        return (this.peso/(this.altura*this.altura));
    }
}