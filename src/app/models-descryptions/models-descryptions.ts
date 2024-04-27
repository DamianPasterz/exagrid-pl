import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-models-descryptions',
  templateUrl: './models-descryptions.component.html',
  styleUrls: ['./models-descryptions.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ModelsDescryptionsComponent {
  @Input() descryptions: string | undefined;
  @Input() img: string | undefined;
}
