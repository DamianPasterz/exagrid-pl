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
    '../../assets/carusele_image/SLIDER-Sealy.png',
    'src/../../assets/carusele_image/SLIDER-Brinks.png',
    'src/../../assets/carusele_image/Kaiser-Permanente.jpg',
    'src/../../assets/carusele_image/SLIDER-Adventist-Health.jpg',
    'src/../../assets/carusele_image/SLIDER-Sony-Pictures.png',
    'src/../../assets/carusele_image/SLIDER-Lockheed-Martin-vertical.png',
    'src/../../assets/carusele_image/SLIDER-AGS.png',
    'src/../../assets/carusele_image/SLIDER-Samsung.png',
    'src/../../assets/carusele_image/halff-associates-inc-vector-logo-e1641923381823.png',
    'src/../../assets/carusele_image/SLIDER-Bose.png',
    'src/../../assets/carusele_image/SLIDER-Tractor-Supply.png',
    'src/../../assets/carusele_image/Pfizer_logo_2021-1-e1683834888906.png',
    'src/../../assets/carusele_image/SLIDER-Goya.png',
    'src/../../assets/carusele_image/SLIDER-Cirrus-Logic.png',
    'src/../../assets/carusele_image/SLIDER-Blue-Cross-Blue-Shield.jpg',
    'src/../../assets/carusele_image/SLIDER-Norwegian-Cruise-Lines.png',
    'src/../../assets/carusele_image/SLIDER-GoodYear.png',
    'src/../../assets/carusele_image/SLIDER-Blue-Cross-Blue-Shield.jpg',
    'src/../../assets/carusele_image/SLIDER-New-Balance.png',
    'src/../../assets/carusele_image/SLIDER-MBDA.jpg',
    'src/../../assets/carusele_image/SLIDER-Cheniere-Energy.jpg',
    'src/../../assets/carusele_image/SLIDER-Accenture-color.png',
    'src/../../assets/carusele_image/SLIDER-Heineken.png',
  ];
}
