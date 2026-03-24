import { Component } from '@angular/core';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CocktailNavigationComponent } from '../cocktail-navigation/cocktail-navigation.component';


@Component({
  selector: 'app-cocktail',
  imports: [CocktailCardComponent, CocktailNavigationComponent],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent implements OnInit {
  dataService = inject(DataService);
  title = 'All Cocktails';
  showDescription = false;
  allCocktails: any[] = [];
  listOfCocktails : Array <any> = [];



  onClick() {
    this.showDescription = !this.showDescription;
  }

  // constructor() {
  //   this.dataService.getCocktails().subscribe( cocktails => this.listOfCocktails = cocktails )
  // }
  
  ngOnInit():void {
    this.dataService.getCocktails().subscribe( cocktails => {this.listOfCocktails = cocktails; this.allCocktails = cocktails;}  )
  }
  onLetterSelected(letter : string) : void {
    this.listOfCocktails = this.allCocktails.filter(cocktail => cocktail.name.startsWith(letter));
  }
}
