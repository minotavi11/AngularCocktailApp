import { Component } from '@angular/core';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';

@Component({
  selector: 'app-without-alcohol',
  imports: [CocktailCardComponent],
  templateUrl: './without-alcohol.component.html',
  styleUrl: './without-alcohol.component.css',
})
export class WithoutAlcoholComponent implements OnInit {
  dataService = inject(DataService);
  title = 'Non-Alcoholic Cocktails';
  showDescription = false;
  listOfCocktails : Array <any> = [];
  onClick() {
    this.showDescription = !this.showDescription;
  }
  ngOnInit():void {
    this.dataService.getCocktailsWithout().subscribe( cocktails => this.listOfCocktails = cocktails )
  }

}
