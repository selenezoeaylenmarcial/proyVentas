import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos = new Array<Producto>();
  prodEncontrado!: Producto;
  private urlBase = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  getProducto(id:number):Producto{
    for(let i=0; this.productos.length; i++){
      if(this.productos[i].codigo == id){
        this.prodEncontrado = new Producto();
        this.prodEncontrado = this.productos[i];
      }
    }
    return this.prodEncontrado;
  }

  add(p: Producto): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this.http.post(this.urlBase + "/guardar", p, httpOptions);
  }

  getAllProductos(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({

      })
    };
    return this.http.get(this.urlBase, httpOptions);
  }

  remove(id: number):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
        

      })
    };
    return this.http.delete(this.urlBase, httpOptions);
  }
}

/*
for(let i=0; this.productos.length; i++){
  if(this.productos[i].codigo == id){
    this.productos.splice(i, 1);
  }
} */