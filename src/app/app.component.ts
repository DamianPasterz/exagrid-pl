import { Component, inject } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  globalService = inject(GlobalService);

  openModal(isOpen: boolean): void {
    this.globalService.openSidebar();
  }
  closeSidebar() {
    this.globalService.closeSidebar();
  }

  get isSidebarOpen() {
    return this.globalService.isSidebarOpen;
  }
}
