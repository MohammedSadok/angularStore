import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  result: Product[] = [];

  getAllProduct() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }
  getOneProduct(id: number) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
  deleteProduct(id: number) {
    return this.http.delete<Product>(`http://localhost:3000/products/${id}`);
  }
  addProduct(product: Product) {
    return this.http.post<Product>(`http://localhost:3000/products/`, product);
  }
  updateProduct(product: Product) {
    return this.http.put<Product>(`http://localhost:3000/products/${product.id}`, product);
  }
}
