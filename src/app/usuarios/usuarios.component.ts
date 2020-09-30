import { Component, OnInit } from '@angular/core';
import { PayService } from '../pay.service';
 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  
  constructor( private service: PayService) {
  //   private usuarios: User [];
  // lista (){
   
  //   this.service.search().subscribe(usuarios => {
  //     console.log(usuarios[0].id)
  //   })

  }

  ngOnInit(): void {
    //console.log(this.service.User)
    this.service.getData().subscribe((data) => {
      console.log("Data", data);

    })
  }

}

// interface User {
//   id: number;
//   name: string;
//   img: string;
//   username: string;
// }
