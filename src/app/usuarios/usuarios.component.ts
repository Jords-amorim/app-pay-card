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
   pagamento: boolean = true

  ngOnInit(): void {
     this.service.getData().subscribe((data) => {
       this.persondata = Array.from(Object.keys(data) , k=>data[k]);
      console.log(this.persondata);     

    })
  }
  
  //  Creare function Show Bottun 
  // valorModal = true 
  // showNotFoundModal  (){
  //   this.valorModal = !this.valorModal
  //   this.displays.mudarValor(true) 
  // }

  showNotFoundModal(){
    this.pagamento = false;
    

  }
  
}
