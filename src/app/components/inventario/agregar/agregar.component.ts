import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { Producto } from 'src/app/models/producto';
import { ColoresService } from 'src/app/services/colores.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  
  producto!:Producto;
  colores!:Array<Color>;
  imagenes!:Array<String>;
  imagen!: string;
  coloresElegidos!:Array<Color>;
  colorE!:Color;
  accion: string = 'new';

  constructor(private prodServ: ProductosService, private coloresServ: ColoresService, private sanitizer: DomSanitizer, private router:Router, private activatedRoute: ActivatedRoute){
    this.iniciar();
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != 0){
        this.accion = "update";
        this.cargarProducto(params['id'])
        
      }else{
        this.accion= 'new';
      }
    });  
  }

  iniciar(){
    this.coloresElegidos = new Array<Color>();
    this.producto = new Producto();
    this.cargarColores();
    this.imagenes = new Array<String>();
  }

  cargarColores(){
    this.colores = this.coloresServ.colores;
  }

  elegirColores(){
      if (this.coloresElegidos.includes(this.colorE)){
        console.log("ya selecciono este color")
      } else{

        this.coloresElegidos.push(this.colorE);
      }
    }

  agregar(){
    for(let i=0; this.coloresElegidos.length; i++){
      this.producto.colores.push(this.coloresElegidos[i].codigo);
    }
    this.producto.imagenes = this.imagenes;
    this.prodServ.add(this.producto);

  }

  editar(){

  }

  cargarProducto(id: number){
    this.producto = this.prodServ.getProducto(id);
  }


  onFileChange (event: any) {

    const archivocapturado = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.imagen = base64String; 
      this.imagenes.push(base64String);
    };
    if (archivocapturado){
      reader.readAsDataURL(archivocapturado);
    }
  }

}

  /*extraerBase64 = async ($event:any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve ({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve ({
          base: null
        })
      };

    } catch(e) {
      return null;
    }
  }) */
  

