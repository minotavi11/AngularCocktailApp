import { Component } from '@angular/core';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CocktailNavigationComponent } from '../cocktail-navigation/cocktail-navigation.component';
import { AddCocktailFormComponent } from '../add-cocktail-form/add-cocktail-form.component';



@Component({
  selector: 'app-cocktail',
  imports: [CocktailCardComponent, CocktailNavigationComponent, AddCocktailFormComponent],
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
  ngOnInit():void {
    this.dataService.getCocktails().subscribe( cocktails => {this.listOfCocktails = cocktails; this.allCocktails = cocktails;}  )
  }
  onLetterSelected(letter : string) : void {
    this.listOfCocktails = this.allCocktails.filter(cocktail => cocktail.name.startsWith(letter));
  }
  onSearchPerformed(term : string): void{  
    this.listOfCocktails = this.allCocktails.filter(cocktail => cocktail.name.toLowerCase().includes(term.toLowerCase()));

  }
  onCocktailAdded(newCocktail: any): void {
    this.dataService.addCocktail(newCocktail);
    // this.allCocktails.push(newCocktail);
    this.listOfCocktails = [...this.allCocktails];
  }
}
