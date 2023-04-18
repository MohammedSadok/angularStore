import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  result: any = [];
  number: number = 1;

  getAllProduct() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getOneData(number: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${number}`);
  }
  deleteProduct(number: number){
    return this.http.delete(`https://fakestoreapi.com/products/${number}`);
  }
  
}
