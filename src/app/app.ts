import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cocktail';
}
