import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlBase = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  
  addProducto(p: Producto): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        
      }),
      params: new HttpParams({
        
      })
    };
    return this.http.post(this.urlBase + "/guardar", p, httpOptions);
  }

  getProducto(codigo:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({

      })
    };
    return this.http.get(this.urlBase + "/ver/" + codigo, httpOptions);
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

  removeProducto(codigo: number):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
        

      })
    };
    return this.http.delete(this.urlBase, httpOptions);
  }

  getColores():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      
      }),
      params: new HttpParams({
        

      })
    };
    return this.http.get(this.urlBase + "/colores", httpOptions);
  }
}

