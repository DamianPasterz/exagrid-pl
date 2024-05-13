import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-home-number-content',
  templateUrl: './home-number-content.component.html',
  styleUrls: ['./home-number-content.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeNumberContentComponent {}
