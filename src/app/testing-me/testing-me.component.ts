import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelBanerContentComponent } from '../model-baner-content/model-baner-content.component';
import { ModelsDescryptionsComponent } from '../models-descryptions/models-descryptions';

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
  public descriptions = `Jeszcze nigdy testowanie nie było tak sprawne logistycznie. Daj nam znać, że chcesz przetestować rozwiązanie. Potrzebujemy informacji na temat wielkości Twojego Full Backupu oraz retencji dla danych. Jeden formalny podpis, że przystępujesz do testów Exagrida i już. Za 2 tygodnie przyjeżdza do Ciebie nowe urządzenie- takie, o jakie poprosiłeś. W ciągu tego czasu uzgadniamy adresację i sprawy sieciowe. Potrzebujemy 2 godziny, aby podlączyć Exagrida w Twoim Data Center. Testuj, próbuj, kasuj, niszcz. Na tym polega ta zabawa. A my jesteśmy do Twojej dyspozycji, jeśli będziesz chciał o coś zapytać lub przekonfigurować. 
  Potrzebujesz testować miesiąc? Nie ma problemu. Potrzebuejsz testować 3 miesiące- też nie ma żadnego problemu. 
  Uwaga- nie odpowiadamy za chęć zakupu urządzenia po testach. Robisz to na swoją własną odpowiedzialność. `;
}
