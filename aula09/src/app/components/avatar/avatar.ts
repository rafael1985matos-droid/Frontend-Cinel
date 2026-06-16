import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './avatar.css',
})
export class Avatar {
  localnome: string = 'Rafael';
  localImage!: string;
  //  nome2: string = `20`;
  //  nome3: string = 'true';

  logout() {
    //throw new Error('Method not implemented.');
    console.log('deslogou');
  }
}
