import { Color } from "./color";
import { Etiqueta } from "./etiqueta";

export class Producto {
    codigo?:number;
    nombre!:string;
    descripcion!:string;
    precio!:number;
    colores!:Array<Color>;
    imagenes!:Array<string>;
    etiquetas!:Array<Etiqueta>;
    estadoProducto!: Boolean;

    constructor(){
        this.colores = new Array<Color>();
        this.imagenes = new Array<string>();
        this.etiquetas = new Array<Etiqueta>();
        this.estadoProducto = true;
    }

    
}
