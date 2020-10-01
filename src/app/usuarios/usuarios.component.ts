import { Component, OnInit } from '@angular/core';
import { PayService } from '../pay.service';
 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {

  public persondata = [];
  constructor( private service: PayService) { }

  ngOnInit(): void {
     this.service.getData().subscribe((data) => {
       this.persondata = Array.from(Object.keys(data) , k=>data[k]);
      console.log(this.persondata);     

    })
  }
}
