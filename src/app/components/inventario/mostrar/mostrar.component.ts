import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit{
  productos!: Array<Producto>;

  constructor(private prodServ: ProductosService, private router: Router){
    this.productos = new Array<Producto>();
    this.mostrarProductos();
  }
  ngOnInit(): void {
    
  }

  mostrarProductos(){
    this.prodServ.getAllProductos().subscribe((p) => {
      this.productos = p;

      console.log("Productos recibidos:", p);
      console.log("Productos recibidos:", this.productos[0]);
    });
  }

  

  eliminarProducto(id: number){
    this.prodServ.removeProducto(id);
    console.log(this.prodServ);
  }

  editarProducto(p: Producto){
    this.router.navigate(['editar', p.codigo]);
  }


}
