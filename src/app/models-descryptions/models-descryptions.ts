import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-models-descryptions',
  templateUrl: './models-descryptions.component.html',
  styleUrls: ['./models-descryptions.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ModelsDescryptionsComponent {
  @Input() descryptions: string | undefined | SafeHtml | HTMLElement;
  @Input() img: string | undefined;
}
