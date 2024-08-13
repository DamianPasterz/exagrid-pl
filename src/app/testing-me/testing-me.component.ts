import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelBanerContentComponent } from '../model-baner-content/model-baner-content.component';
import { ModelsDescryptionsComponent } from '../models-descryptions/models-descryptions';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-testing-me',
  standalone: true,
  imports: [
    CommonModule,
    ModelBanerContentComponent,
    ModelsDescryptionsComponent,
  ],
  templateUrl: './testing-me.component.html',
  styleUrls: ['./testing-me.component.scss'],
})
export class TestingMeComponent {
  globalService = inject(GlobalService);

  closeSidebar() {
    this.globalService.closeSidebar();
  }
  public descriptions = `Jeszcze nigdy testowanie nie było tak sprawne logistycznie.

  Daj mi znać, że chcesz przetestować rozwiązanie. Równolegle będę potrzebował od Ciebie informacji na temat Twojego środowiska backupu: pojemność full backupu oraz określenie retencji dla składowanych danych. Jeśli potrzebujesz konkretnej wydajności odtwarzania – napisz mi o tym. Wyskaluję dla Ciebie rozwiązanie i za 2 tygodnie przyjedzie do Ciebie nowe urządzenie- takie, jakiego potrzebujesz.
  
  W między czasie uzgodnimy adresację i sprawy sieciowe. Potrzebujemy dwóch godzin, aby podłączyć Exagrida w Twoim Data Center.
  
  A kiedy już go podłączę- testuj, próbuj, kasuj, niszcz. Na tym polega ta zabawa.  A ja jestem do Twojej dyspozycji, jeśli będziesz chciał o coś zapytać.
  
   
  
  Uwaga- nie odpowiadam za chęć zakupu urządzenia po testach. Robisz to na swoją własną odpowiedzialność.`;

  constructor(private sanitizer: DomSanitizer) {}

  get formattedDescriptions(): SafeHtml {
    const descriptionWithLink = this.descriptions.replace(
      'przetestować rozwiązanie',
      '<a href="mailto:adres@example.com?subject=Chciałbym%20przetestować%20rozwiązanie">przetestować rozwiązanie</a>',
    );
    return this.sanitizer.bypassSecurityTrustHtml(descriptionWithLink);
  }
}
