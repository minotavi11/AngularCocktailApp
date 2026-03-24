import { Component } from '@angular/core';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CocktailNavigationComponent } from '../cocktail-navigation/cocktail-navigation.component';

@Component({
  selector: 'app-without-alcohol',
  imports: [CocktailCardComponent, CocktailNavigationComponent],
  templateUrl: './without-alcohol.component.html',
  styleUrl: './without-alcohol.component.css',
})
export class WithoutAlcoholComponent implements OnInit {
  dataService = inject(DataService);
  title = 'Non-Alcoholic Cocktails';
  showDescription = false;
  allCocktails: any[] = [];
  listOfCocktails : Array <any> = [];
  onClick() {
    this.showDescription = !this.showDescription;
  }
   ngOnInit():void {
    this.dataService.getCocktailsWithout().subscribe( cocktails => {this.listOfCocktails = cocktails; this.allCocktails = cocktails;}  )
  }
  onLetterSelected(letter : string) : void {
    this.listOfCocktails = this.allCocktails.filter(cocktail => cocktail.name.startsWith(letter));
  }
  onSearchPerformed(term : string): void{  
    this.listOfCocktails = this.allCocktails.filter(cocktail => cocktail.name.toLowerCase().includes(term.toLowerCase()));

  }
}
