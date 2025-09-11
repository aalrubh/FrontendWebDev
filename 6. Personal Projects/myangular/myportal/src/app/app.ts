import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./components/sidebar/sidebar";
import { Footer } from './components/footer/footer';
import { Header } from "./components/header/header"
@Component({
  selector: 'portal-root',
  imports: [RouterOutlet, Sidebar, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('REC Portal');
  collapsed = false;
}
