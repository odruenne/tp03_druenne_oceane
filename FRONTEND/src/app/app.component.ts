import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KibblesList } from './kibbles-list/kibbles-list.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, KibblesList, SearchEngineComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tp03_druenne_oceane';
  filters = { taste: '', maxPrice: Infinity };

  constructor() {  }
  
}