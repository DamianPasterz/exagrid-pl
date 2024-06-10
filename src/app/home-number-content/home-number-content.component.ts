import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-home-number-content',
  templateUrl: './home-number-content.component.html',
  styleUrls: ['./home-number-content.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeNumberContentComponent {
  public images: string[] = [
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Sealy.png',
    'https://www.exagrid.com/wp-content/uploads/Kaiser-Permanente.jpg',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Brinks.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Adventist-Health.jpg',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Sony-Pictures.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Lockheed-Martin-vertical.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-AGS.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Samsung.png',
    'https://www.exagrid.com/wp-content/uploads/halff-associates-inc-vector-logo-e1641923381823.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Bose.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Tractor-Supply.png',
    'https://www.exagrid.com/wp-content/uploads/Pfizer_logo_2021-1-e1683834888906.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Goya.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Cirrus-Logic.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Blue-Cross-Blue-Shield.jpg',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Norwegian-Cruise-Lines.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-GoodYear.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Blue-Cross-Blue-Shield.jpg',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-New-Balance.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-MBDA.jpg',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Cheniere-Energy.jpg',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Accenture-color.png',
    'https://www.exagrid.com/wp-content/uploads/SLIDER-Heineken.png',
  ];
}
