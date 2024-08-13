import { Component, inject } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  globalService = inject(GlobalService);

  closeSidebar() {
    this.globalService.closeSidebar();
  }
}
