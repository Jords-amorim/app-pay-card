import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
// Chamada Endoipoint método Get
export class PayService { 
  // Variável Api listagem de usuários
  private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
  // Variável Api POSt
  private apipost = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989"
  showModal: Observable<boolean> 
  private showSubject: Subject<boolean> 
  usuario_Selecionado: any
  
 
  
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
  // Retorna API POST
  getPost(){
    return this.http.get(this.apipost);
  }

  // Passa valor para observable através do Next
  mudarValor(valor, item) {
    this.showSubject.next(valor)
    console.log("mudarvalor")
    // Chamada usuario 
    this.usuario_Selecionado = item.name
    return valor
  } 
  // Retorna showModal
  getshowModal(){
    return this.showModal 
  }
  // Método get e set para selecionar usuário.
  public getUsuarioSelecionado(){
    return this.usuario_Selecionado;
  }

  public setUsuarioSelecionado(selecionado){
    return this.usuario_Selecionado = selecionado;
  }
  // Retorna Pagamentos conluído/erro
  addpay( cards){
    this.http.post(this.apipost, cards).subscribe(
      resultado => {
        console.log(resultado)
      },
      erro =>{
        if(erro.status ==400){
          console.log(erro);
        }
      }
    ); 
  }

}  

