import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cocktail-navigation',
  imports: [],
  templateUrl: './cocktail-navigation.component.html',
  styleUrl: './cocktail-navigation.component.css',
})
export class CocktailNavigationComponent implements OnInit {

  @Output() letterSelected = new EventEmitter<string>();

  letters : string[] = [];


  ngOnInit(): void {
    for( let i = 65; i <= 90; i++) {
      this.letters.push(String.fromCharCode(i));
    }
  }

   select (letter : string) : void{
      this.letterSelected.emit(letter);
    }

}
