import { Component, EventEmitter, inject, Output } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  globalService = inject(GlobalService);

  openSidebar() {
    this.globalService.openSidebar();
  }
}
