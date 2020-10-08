import { Component, OnInit } from '@angular/core';
import { PayService } from '../pay.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {  

  showDisplay:boolean
  usuarioselecionado : any ;
 
  constructor(
    public displays: PayService ) {  }

  // Função fecha Modal  
  valorModal = false  
  closeModal(){
    this.valorModal = this.valorModal
    this.displays.mudarValor(this.valorModal, 
    this.displays.getUsuarioSelecionado())
  }
  // quando mudar o valor da variável, executa essa função
  ngOnInit(): void {    
    this.usuarioselecionado = this.displays.getUsuarioSelecionado()
    console.log(this.usuarioselecionado)    
    this.displays.showModal.subscribe((valor) => {
      this.showDisplay = valor
    })
  }
}
