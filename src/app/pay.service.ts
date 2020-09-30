import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(
    private httpService: HttpClient
    
  ) { }
  search () {
    return this.httpService.get ('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989')
  }
}

export {User}
