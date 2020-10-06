import { Component, OnInit } from '@angular/core';
import { PayService } from '../pay.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {  

  showDisplay:boolean

  constructor(public displays: PayService) {  }
  
  ngOnInit(): void {
    this.displays.showModal.subscribe((valor) => {
      this.showDisplay = valor
    })
  }
}
