import { Color } from "./color";

export class Producto {
    codigo!:number;
    nombre!:string;
    descripcion!:string;
    precio!:number;
    colores!:Array<String>;
    imagenes!:Array<String>;
    etiquetas!:Array<String>;
    estadoProducto!: Boolean;

    constructor(){
        this.colores = new Array<String>();
        this.imagenes = new Array<String>();
        this.etiquetas = new Array<String>();
        this.estadoProducto = true;
    }

    
}
