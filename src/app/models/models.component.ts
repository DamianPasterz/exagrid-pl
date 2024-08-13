import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelBanerContentComponent } from '../model-baner-content/model-baner-content.component';
import { ModelsDescryptionsComponent } from '../models-descryptions/models-descryptions';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [
    CommonModule,
    ModelBanerContentComponent,
    ModelsDescryptionsComponent,
  ],
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss'],
})
export class ModelsComponent {
  globalService = inject(GlobalService);

  closeSidebar() {
    this.globalService.closeSidebar();
  }
  public descriptions = ` Exagrid operuje na 5 podstawowych modelach, które dobiera się w zależnosci
  od wielkości Twojego Full Backupu oraz oczekiwanej retencji dla danych.
  Dowolne modele można dowolnie mieszać łącząc je ze sobą w jednego GRID’a. W
  jednej fizycznej lokalizacji możesz połączyć do 32 pudełek. Wydajności-
  sumują się, a Twój system ma globalną deduplikację. Nie musisz planować
  upgradów, rozbudów czy modernizacji. Potrzebujesz przestrzeni? Kupujesz
  kolejne pudełko. Potrzebujesz wydajności? Kupujesz kolejne pudełko. I po
  projekcie.`;
}
