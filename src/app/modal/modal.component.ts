import { Component, OnInit } from '@angular/core';
import { PayService } from '../pay.service';
import { FormGroup, FormControl} from '@angular/forms';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {  

  showDisplay:boolean
  usuarioselecionado : any ;
  dadoscard: any;
  vm: any;

  cards:any = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expired_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expired_date: '01/20',
    },
  ];
  q: any;
  
  constructor(
    
    public displays: PayService,
    private service: PayService,
    private apipost: PayService ) {  }

  // Função fecha Modal  
  valorModal = false  

  // quando mudar o valor da variável, executa essa função
  ngOnInit(): void {    
    this.usuarioselecionado = this.displays.getUsuarioSelecionado()
    console.log(this.usuarioselecionado)    
    this.displays.showModal.subscribe((valor) => {
      this.showDisplay = valor
    })
  }
  // Máscara no valor do input

  maskSearch(event) {
    console.log(event)
    
    if (event.keyCode == 8 && this.q != '') {
      this.q = '';
    }
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 95 && event.keyCode <= 105 ) {
      console.log('É numero')

      
      this.q = this.q + event.key 
      this.q = this.q.replace(/\,/gi,'').replace(/(\d{2})$/g, ',$1')
      this.q = this.q.replace(/\./gi,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  }
  maskSearchDown(event) {
    event.preventDefault();
  }
  


  // Função sendpay  botão pagar modal 
  sendpay(){
    console.log(this.dadoscard)
    this.service.addpay(this.dadoscard); 
  }
  // Função fecha Modal  
  closeModal(){
    this.valorModal = this.valorModal
    this.displays.mudarValor(this.valorModal, 
    this.displays.getUsuarioSelecionado())
  }
}
