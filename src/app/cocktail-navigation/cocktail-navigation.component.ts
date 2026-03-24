import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ReactiveFormsModule, UntypedFormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cocktail-navigation',
  imports: [ ReactiveFormsModule],
  templateUrl: './cocktail-navigation.component.html',
  styleUrl: './cocktail-navigation.component.css',
})
export class CocktailNavigationComponent implements OnInit {

  @Output() letterSelected = new EventEmitter<string>();
  @Output() searchPerformed = new EventEmitter<string>();

  letters : string[] = [];


  ngOnInit(): void {
    for( let i = 65; i <= 90; i++) {
      this.letters.push(String.fromCharCode(i));
    }
  }

   select (letter : string) : void{
      this.letterSelected.emit(letter);
    }
  searchForm : FormGroup
  inputField = new FormControl <string> ('Cuba Libre', {
    validators : [Validators.required, Validators.minLength(3)],
    nonNullable : true 
  
  })

  constructor() {
    this.searchForm = new FormGroup({
      input : this.inputField
    })
  }
  submit( ) :void {
    this.searchPerformed.emit(this.inputField.value)
  }

}
