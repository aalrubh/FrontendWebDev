import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { sidebar_item } from './sidebar_item';
import sidebarData from '../../assets/json/sidebar_items.json';
import { CommonModule, NgClass } from '@angular/common';

/*
  Inputs:
	- isSidebarCollapsed: controls collapsed/expanded rendering from the parent.

  Outputs:
	- requestExpand: emitted when a collapsed menu item with children is clicked, asking parent to expand.

  Data:
	- side_bar: menu definition loaded from JSON; items may include optional children and transient isOpen state.

  Behavior:
	- toggleMenuItem: toggles isOpen when expanded; when collapsed and item has children, opens the item and emits requestExpand.
	- ngOnChanges: when collapsing, closes all open submenu items to keep UI consistent.
*/
@Component({
	selector: 'portal-sidebar',
	imports: [NgClass, CommonModule],
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss',
})
export class Sidebar implements OnChanges {
	@Input() isSidebarCollapsed = false;
	@Output() requestExpand = new EventEmitter<void>();

	side_bar: sidebar_item[] = sidebarData;

	toggleMenuItem(item: sidebar_item) {
		if (!this.isSidebarCollapsed && item.children) {
			item.isOpen = !item.isOpen;
		}
		if (this.isSidebarCollapsed && item.children && !item.isOpen) {
			item.isOpen = true;
			this.requestExpand.emit();
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['isSidebarCollapsed']?.currentValue === true) {
			this.side_bar.forEach((item) => (item.isOpen = false));
		}
	}
}
