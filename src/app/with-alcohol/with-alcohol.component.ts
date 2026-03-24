import { Component } from '@angular/core';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CocktailNavigationComponent } from '../cocktail-navigation/cocktail-navigation.component';


@Component({
  selector: 'app-with-alcohol',
  imports: [CocktailCardComponent,CocktailNavigationComponent],
  templateUrl: './with-alcohol.component.html',
  styleUrl: './with-alcohol.component.css',
})
export class WithAlcoholComponent implements OnInit {
  dataService = inject(DataService);
  title = 'Alcoholic Cocktails';
  showDescription = false;
  allCocktails: any[] = [];
  listOfCocktails : Array <any> = [];
  onClick() {
    this.showDescription = !this.showDescription;
  }
  ngOnInit():void {
    this.dataService.getCocktailsWith().subscribe( cocktails => {this.listOfCocktails = cocktails; this.allCocktails = cocktails;}  )
  }
  onLetterSelected(letter : string) : void {
    this.listOfCocktails = this.allCocktails.filter(cocktail => cocktail.name.startsWith(letter));
  }
    onSearchPerformed(term : string): void{  
    this.listOfCocktails = this.allCocktails.filter(cocktail => cocktail.name.toLowerCase().includes(term.toLowerCase()));

  }


}
