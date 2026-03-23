import { Component } from '@angular/core';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';

@Component({
  selector: 'app-cocktail',
  imports: [CocktailCardComponent],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent {
  listOfCocktails = [
    { name: "Mojito", image: "/mojito.jpg" },
    { name: "Margarita", image: "/margarita.jpg" },
    { name: "Cosmopolitan", image: "/alice-cocktail.jpg" },
    { name: "Pina Colada", image: "/apello.jpg" },
    { name: "Daiquiri", image: "/apple-berry-smoothie.jpg" },
    { name: "Mai Tai", image: "/cuba-libre.jpg" },
    { name: "Moscow Mule", image: "/dry-martini.jpg" },
    { name: "Whiskey Sour", image: "/gin-and-tonic.jpg" },
    { name: "Negroni", image: "/spritz.jpg" }
  ];


}
