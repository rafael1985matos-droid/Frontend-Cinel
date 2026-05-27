import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { Avatar } from "./components/avatar/avatar";

@Component({
  selector: 'app-root',
  imports: [ Header, Main, Footer, Avatar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
