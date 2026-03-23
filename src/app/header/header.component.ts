import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imageUrl= "https://www.freevector.com/uploads/vector/preview/7669/FreeVector-Cocktails-Icon.jpg";
  title ='CocktailApp';
  links = [
    {label: 'Home' , href : '/home'},
    {label: 'Cocktails with alcool' , href : '/cocktails-with-alcool'},
    {label: 'Cocktails without alcool' , href : '/cocktails-without-alcool'},
    {label: 'Details' , href : '/details'}
  ];
}
