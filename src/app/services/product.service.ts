import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  result: Product[] = [];
  number: number = 1;

  getAllProduct() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getOneData(number: string) {
    return this.http.get<Product>(`http://localhost:3000/products/${number}`);
  }
  deleteProduct(number: string){
    return this.http.delete<Product>(`http://localhost:3000/products/${number}`);
  }
  addProduct(product: Product){
    return this.http.post<Product>(`http://localhost:3000/products/`,product);
  }

}
