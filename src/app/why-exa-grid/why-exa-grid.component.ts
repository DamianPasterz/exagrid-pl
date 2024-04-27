import { Component } from '@angular/core';

@Component({
  selector: 'app-why-exa-grid',
  templateUrl: './why-exa-grid.component.html',
  styleUrls: ['./why-exa-grid.component.scss'],
})
export class WhyExaGridComponent {
  features = [
    {
      title: 'Wydajność tworzenia kopii backupu i jej przywracania',
      description:
        'Potrafimy zwiększyć 3x szybkość wykonywania się backupu i przywrócić dane nawet 20x szybciej niż w innych systemach do tego dedykowanych.',
    },
    {
      title: 'Zabezpieczenie przed Ransomware',
      description:
        'Jedyne rozwiązanie, które posiada w sobie obszar w 100% odsieciowiony, niewidoczny nawet dla systemu backupu.',
    },
    {
      title: 'Stałe okno backup',
      description:
        'Każdy model macierzy ma konkretną pojemność i wydajność. Dzięki budowie GRID sumujesz pojemność i wydajność. Nigdy nie będzie wolniej niż dziś.',
    },
    {
      title: 'Skalowalność',
      description:
        'Maksymalna suma wydajności i pojemności w jednym fizycznym GRID to: 32 macierze połączone ze sobą, 6PB Twojego Full Backupu i 516TB/hr.',
    },
  ];
}
