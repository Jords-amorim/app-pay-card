import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// Chamada Endoipoint método Get
export class PayService {    

private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiurl); 
  }
}  