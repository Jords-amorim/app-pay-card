import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { PayService, User } from '../pay.service';
 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  
  constructor( private service: PayService) {
    private usuarios: User [];
  lista (){
   
    this.service.search().subscribe(usuarios => {
      console.log(usuarios[0].id)
    })
  }

  ngOnInit(): void {
    //console.log(this.service.User)
  }

}