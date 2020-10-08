import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

// Criar Interface Transaction 
interface TransactionPayload {
  card_number: string,
  cvv: number,
  expired_date: string,
  destination_user_id: number,
  value: number,
}

@Injectable({
  providedIn: 'root'
})
// Chamada Endoipoint método Get
export class PayService { 
  // Variáveis
  private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
  showModal: Observable<boolean> 
  private showSubject: Subject<boolean> 
  usuario_Selecionado: any
  pay: TransactionPayload
 
  
  constructor(
    private http: HttpClient   
    ) {
      this.showSubject = new Subject<boolean>();
      this.showModal = this.showSubject.asObservable();
      this.showSubject.next(false);
      } 
      
  // Retorna APIURL
  getData() {
    return this.http.get(this.apiurl); 
  }

  // Passa valor para observable através do Next
  mudarValor(valor, item) {
    this.showSubject.next(valor)
    console.log("mudarvalor")
    this.usuario_Selecionado = item.name
    return valor
  } 
  // Retorna showModal
  getshowModal(){
    return this.showModal 
  }
  
  public getUsuarioSelecionado(){
    return this.usuario_Selecionado;
  }

  public setUsuarioSelecionado(selecionado){
    return this.usuario_Selecionado = selecionado;
  }

  // Endpoint Pagamento - Método Transaction e post(angular)
  paypoint(pay){
    let endpoint = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989"  
     
    return this.http.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", pay)
  }
}  
