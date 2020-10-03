import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// Chamada Endoipoint método Get
export class PayService { 
  
  showNotFound:Observable<boolean>   

private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

  constructor(private http: HttpClient) {
    // this.showSubject = new Subject<boolean>();
    // this.ShowNotFound = this.showSubject.asObservable();
  } 
  // private showSubject: Subject<boolean>  
  // mudarValor(valor) {
  //   this.showSubject.next(valor)
  //   return valor
  // } 

  // getShowNotFound(){
  //   return this.showNotFound
  // }
  
  getData() {
    return this.http.get(this.apiurl); 
  }
 

  
}  