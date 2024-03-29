import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock} from '../Interface/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private urlBase: string =
  'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/stock.Controller.php?op=';
constructor(private cliente: HttpClient) {}

todos(): Observable<Stock[]> {
  return this.cliente.get<Stock[]>(this.urlBase + 'todos');
}
}
