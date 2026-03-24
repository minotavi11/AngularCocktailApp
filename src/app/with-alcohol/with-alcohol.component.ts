import { Component } from '@angular/core';
import { CocktailCardComponent } from '../cocktail-card/cocktail-card.component';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { inject } from '@angular/core';

@Component({
  selector: 'app-with-alcohol',
  imports: [CocktailCardComponent],
  templateUrl: './with-alcohol.component.html',
  styleUrl: './with-alcohol.component.css',
})
export class WithAlcoholComponent implements OnInit {
  dataService = inject(DataService);
  title = 'Alcoholic Cocktails';
  showDescription = false;
  listOfCocktails : Array <any> = [];
  onClick() {
    this.showDescription = !this.showDescription;
  }
  ngOnInit():void {
    this.dataService.getCocktailsWith().subscribe( cocktails => this.listOfCocktails = cocktails )
  }


}
