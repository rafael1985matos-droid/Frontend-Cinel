import { User } from 'firebase/auth';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AuthStateService } from './service/auth-state';

@Component({
  selector: 'app-root',
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private authStateService: AuthStateService) {}
  ngOnInit(): void {
    this.authStateService.iniAuthListener();

    /**Forma de testar se tempos dados */
    this.authStateService.getUser().subscribe((User) => {
      console.log('dados do google Auth: ', User);
    });
  }
}
