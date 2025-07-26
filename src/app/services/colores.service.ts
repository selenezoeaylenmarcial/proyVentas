import { Injectable } from '@angular/core';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {
  colores!: Array<Color>;

  constructor() { 
    this.colores = new Array<Color>();
    this.colores.push(
      {
      codigo: "#000000",
      nombre: "Negro"
    }, {
      codigo: "#808080",
      nombre: "Gris Oscuro"
    }, {
      codigo: "#C0C0C0",
      nombre: "Gris Claro"
    }, {
      codigo: "#FFFFFF",
      nombre: "Blanco"
    }, {
      codigo: "#F5F5DC",
      nombre: "Beige"
    }, {
      codigo: "#808000",
      nombre: "Verde Militar"
    }, {
      codigo: "#DDA0DD",
      nombre: "Lila"
    }, {
      codigo: "#800080",
      nombre: "Morado"
    }, {
      codigo: "#191970",
      nombre: "Azul"
    }, {
      codigo: "#87CEFA",
      nombre: "Celeste"
    }, {
      codigo: "#8B4513",
      nombre: "Marron"
    }, {
      codigo: "#FF69B4",
      nombre: "Rosa"
    },{
      codigo: "#FFD700",
      nombre: "Amarillo"
    }, {
      codigo: "#FF4500",
      nombre: "Naranja"
    }, {
      codigo: "#FF0000",
      nombre: "Rojo"
    }
    );

    console.log(this.colores);
  }
}
