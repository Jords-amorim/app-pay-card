import { Component, OnInit } from '@angular/core';
import { PayService } from '../pay.service';

 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {

  
  constructor( 
    private service: PayService,
    // Importação variável displays
    public displays : PayService ) { }
    public persondata = [];
        
    // Variáveis 
    mudarValor: boolean = true
    

  // Função receve Array de usuários  
  ngOnInit(): void {
    
      // this.pay = {
      //   card_number:'1111111111111111',
      //   cvv:parseInt('789') ,
      //   expired_date:'01/18',
      //   destination_user_id: 34,
      //   value: 399,
      // }
    
  //   this.service.paypoint(this.pay).subscribe((resultado ) => {
  //    console.log(resultado)  
  //  }),
     this.service.getData().subscribe((data) => {
       this.persondata = Array.from(Object.keys(data) , k=>data[k]);
      console.log(this.persondata);  
    })
  }

  
  // Função OpenModal ao clicar botão pagar 
  valorModal = true 
  OpenModal (item){
    // Retorna usuário selecionado
    // this.displays.getUsuarioSelecionado()
    // Mostra Modal
    this.valorModal = !this.valorModal
    // Fecha Modal
    this.displays.mudarValor(this.valorModal, item) 
  }


}

