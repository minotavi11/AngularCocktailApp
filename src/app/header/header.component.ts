import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  imageUrl= "https://www.freevector.com/uploads/vector/preview/7669/FreeVector-Cocktails-Icon.jpg";
  title ='CocktailApp';
  links = [
    {label: 'Home' , href : '/'},
    {label: 'Cocktails with alcool' , href : '/with-alcohol'},
    {label: 'Cocktails without alcool' , href : '/without-alcohol'},
    {label: 'Details' , href : '/about'}
  ];
}
