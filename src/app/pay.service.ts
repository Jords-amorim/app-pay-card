import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// Chamada Endoipoint método Get
export class PayService { 
  // Variáveis
  private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
  showModal: Observable<boolean> 
  private showSubject: Subject<boolean>  
  
  constructor(private http: HttpClient) {
    this.showSubject = new Subject<boolean>();
    this.showModal = this.showSubject.asObservable();
    this.showSubject.next(false);
  } 
  
  mudarValor(valor) {
    this.showSubject.next(valor)
    return valor
  } 
  // Retorna showModal
  getshowModal(){
    return this.showModal 
  }
  // Retorna APIURL
  getData() {
    return this.http.get(this.apiurl); 
  }
  
}  