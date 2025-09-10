import { Component, EventEmitter, Input, Output } from '@angular/core';
import { sidebar_item } from './sidebar_item';
import sidebarData from '../../assets/json/sidebar_items.json';
import { NgClass } from "@angular/common";

@Component({
  selector: 'portal-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  side_bar: sidebar_item[] = sidebarData;

  toggleSidebar() {
    this.sidebarToggle.emit();
    //Must add logic to close all active sidebars!
  }

  toggleMenuItem(item: sidebar_item) {
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}
