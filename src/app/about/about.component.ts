import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelBanerContentComponent } from '../model-baner-content/model-baner-content.component';
import { ModelsDescryptionsComponent } from '../models-descryptions/models-descryptions';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ModelBanerContentComponent,
    ModelsDescryptionsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public descriptions = `HUB4- zespół ludzi, którzy zajmują się danymi. Backupują, składują, archiwizują, zabezpieczają. Każdy projekt związany z ciągłościa dostępu do danych, backupem czy archiwizacją to nasza codzienność. Na tym się znamy i jesteśmy w tym dobrzy. 
  Jesteśmy partnerem roku 2022 Exagrida w Polsce , a do tego Centrum Kompetencyjnym Commvaulta.  `;
}
