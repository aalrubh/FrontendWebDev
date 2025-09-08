import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  // toggleSidebar = input(false);
  toggleSubMenu(): void {
    const toggleButton = document.getElementById("toggle-button");
    const sideBar = document.getElementById("side-bar");

    button.nextElementSibling.classList.toggle('show');
    Button.classList.toggle("rotate");

    if (sideBar.classList.contains("close")) {
      sideBar.classList.toggle("close");
    }
  }
}
