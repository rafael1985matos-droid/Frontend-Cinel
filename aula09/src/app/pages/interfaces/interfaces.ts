import { Component } from '@angular/core';
import { IUser } from '../../shared/i-user';

type IUserlocal = { id:number, nome:string, email:string};


@Component({
  selector: 'app-interfaces',
  imports: [],
  templateUrl: './interfaces.html',
  styleUrl: './interfaces.css',
})
export class Interfaces {

  user: IUser = {id: 1, nome: "Rafael", email: "rafael1985matos@gmail.com"};
  user02: IUserlocal = {id: 1, nome: "Rafael", email: "rafael1985matos@gmail.com"};

  constructor () {
    console.log("minha Interface:", this.user);
    console.log(`minha Interface${this.user02.id}`);
  }

}
