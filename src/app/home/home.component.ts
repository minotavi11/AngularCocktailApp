import { Component } from '@angular/core';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { OnInit, OnDestroy } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CocktailComponent, TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
   title= 'Bienvenue dans la plus belle application de Cocktail du monde!';


  ngOnInit() {
    console.log("BodyComponent initialized");
  }
  ngOnDestroy() {
    console.log("BodyComponent destroyed");
  }

}
