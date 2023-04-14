import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetAllDataService {

  constructor(private http: HttpClient) { }

  getMyData() {
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }
  getOneData(number: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${number}`);
  }

}

