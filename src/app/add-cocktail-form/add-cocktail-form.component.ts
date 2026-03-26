import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cocktail-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-cocktail-form.component.html',
  styleUrl: './add-cocktail-form.component.css',
})
export class AddCocktailFormComponent {
  addCocktailForm: FormGroup;
  @Output() cocktailAdded = new EventEmitter<any>();

  constructor( ) {
    this.addCocktailForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required, Validators.minLength(3)], nonNullable: true }),
      description: new FormControl('', { validators: [Validators.required, Validators.minLength(10)], nonNullable: true }),
      alcohol: new FormControl(false, { nonNullable: true }),
      image: new FormControl('', { 
        validators: [Validators.required,], 
        nonNullable: true 
      })
    });
  }

  submit(): void {
    if (this.addCocktailForm.valid) {
      console.log('Adding:', this.addCocktailForm.value);
      this.cocktailAdded.emit(this.addCocktailForm.value);
    }
  }
}
