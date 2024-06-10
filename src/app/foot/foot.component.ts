import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss'],
})
export class FootComponent {
  email: string = 'kontakt@hub4.pl';
  subject: string = 'Chce przetestować Exagrida';
  body: string = 'Chce przetestować Exagrida';

  get mailtoLink(): string {
    return `mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
  }
}
