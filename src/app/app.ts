import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddMenuItem } from "./menu/add-menu-item/add-menu-item";
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AddMenuItem, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'fishdhaba';
}
