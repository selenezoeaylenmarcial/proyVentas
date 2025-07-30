import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  
  producto!:Producto;
  colores!:Array<Color>;
  imagenes!:Array<string>;
  imagen!: string;
  coloresElegidos!:Array<Color>;
  colorE!:Color;
  accion: string = 'new';

  constructor(private prodServ: ProductosService, private sanitizer: DomSanitizer, private router:Router, private activatedRoute: ActivatedRoute){
    this.iniciar();
  }
  
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   if (params['codigo'] != 0){
    //     this.accion = "editar";
    //     this.cargarProducto(params['codigo'])
        
    //   }else{
    //     this.accion= 'new';
    //   }
    // });  
  }

  iniciar(){
    this.coloresElegidos = new Array<Color>();
    this.producto = new Producto();
    this.cargarColores();
    this.imagenes = new Array<string>();
  }

  cargarColores(){
    this.prodServ.getColores().subscribe((c) => {
      this.colores = c;
      console.log("Colores: ", this.colores);
    });
  }

  elegirColores(){
      if (this.coloresElegidos.includes(this.colorE)){
        console.log("ya selecciono este color")
      } else{

        this.coloresElegidos.push(this.colorE);
      }
    }

  agregar(){
      this.producto.colores = this.coloresElegidos;
      this.producto.imagenes = this.imagenes;

      console.log(this.producto);

      this.prodServ.addProducto(this.producto).subscribe();
  }

  editar(){

  }
    onFileSelected(event: any) {
    const files = event.target.files;

    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          this.imagenes.push(result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // cargarProducto(codigo: number){
  //   this.prodServ.getProducto(codigo).subscribe((p) => {
  //     this.producto = p;
  //     console.log("producto seleccionado: " + this.producto)
  //   });
  // }


  // onFileChange (event: any) {

  //   const archivocapturado = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     const base64String = reader.result as string;
  //     this.imagen = base64String; 

  //     this.imagenes.push(this.imagen);
  //     console.log(this.imagenes);
  //   };
  //   if (archivocapturado){
  //     reader.readAsDataURL(archivocapturado);
  //   }
  // }

}

  

