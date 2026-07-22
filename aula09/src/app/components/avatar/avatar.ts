import { Component, inject, input } from '@angular/core';
import { User, Auth } from 'firebase/auth';
import { AuthStateService } from '../../service/auth-state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
 // localnome: string = 'Rafael';
  //localImage!: string;
//localUserComponentFilho = input<User>();
  private localService = inject(AuthStateService);
  localUser$ = this.localService.getUser();

  ///@Input("nome da variável") e @OutPut("nome do método ou propriedade")
  constructor(){
   
  }

  logout() {
    this.localService.logout();
  }
}
