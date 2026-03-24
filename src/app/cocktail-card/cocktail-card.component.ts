import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail-card',
  imports: [TitleCasePipe, NgClass],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.css'
})
export class CocktailCardComponent {
  @Input() cocktail: any;
  @Input() showDescription = false;
  @Output() cocktailDescription = new EventEmitter<string>();
  onClick() {
    if (this.cocktail) {
    this.cocktailDescription.emit(this.cocktail.description);
  }
}

}
