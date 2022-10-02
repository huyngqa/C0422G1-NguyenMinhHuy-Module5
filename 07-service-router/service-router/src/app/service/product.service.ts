import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

const PRODUCT_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(PRODUCT_URL + 'products');
  }

  saveProduct(product: Product) {
    return this.httpClient.post(PRODUCT_URL + 'products', product);
  }

  getProductById(id: number): Observable<any> {
    return this.httpClient.get(PRODUCT_URL + 'products/' + id);
  }

  updateProduct(id, product: Product) {
    return this.httpClient.patch(PRODUCT_URL + 'products/' + id, product);
  }

  deleteProduct(id) {
    return this.httpClient.delete(PRODUCT_URL + 'products/' + id);
  }
}
