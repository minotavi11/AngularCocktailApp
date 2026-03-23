import { Component } from '@angular/core';
import { CocktailComponent } from '../cocktail/cocktail.component';
import { OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-body',
  imports: [CocktailComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log("BodyComponent initialized");
  }
  ngOnDestroy() {
    console.log("BodyComponent destroyed");
  }

}
