import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproveedor} from '../Interface/Iproveedor';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private urlBase: string =
  'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php?op=';
constructor(private cliente: HttpClient) {}

todos(): Observable<Iproveedor[]> {
  return this.cliente.get<Iproveedor[]>(this.urlBase + 'todos');
}
/*uno(id: number): Observable<Iproveedor> {
  var proveedor = new FormData();
  return this.cliente.post<Iproveedor>(this.urlBase + 'uno', proveedor);
}
insertar(producto: Iproveedor): Observable<any> {
  var prod = new FormData();
  prod.append('nombre', producto.Nombre);
  prod.append('precio', producto.Precio.toString());
  prod.append('stock', producto.Cantidad.toString());
  return this.cliente.post(this.urlBase + 'insertar', prod);
}
actualizar(producto: Iproveedor): Observable<any> {
  var prod = new FormData();
  prod.append('id', producto.ProductoId.toString());
  prod.append('nombre', producto.Nombre);
  prod.append('precio', producto.Precio.toString());
  prod.append('stock', producto.Cantidad.toString());
  return this.cliente.post(this.urlBase + 'actualizar', prod);
}
eliminar(id: number): Observable<any> {
  var prod = new FormData();
  prod.append('id', id.toString());
  return this.cliente.post(this.urlBase + 'eliminar', prod);
}*/

}
