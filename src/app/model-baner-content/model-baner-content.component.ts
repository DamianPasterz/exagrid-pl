import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-baner-content',
  templateUrl: './model-baner-content.component.html',
  styleUrls: ['./model-baner-content.component.scss'],
  standalone: true,
})
export class ModelBanerContentComponent {
  @Input() title: string | undefined;
}
