import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'portal-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  
})
export class Header {
  @Output() collapseToggle = new EventEmitter<void>();

  onToggle() {
    this.collapseToggle.emit();
  }
}
