import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  frenchText ="Fait en Angular v21 en attendant l'arrivée de la v22";
  englishText = "Made in Angular v21 while waiting for the arrival of v22";
  logoUrl = "/talan-logo.svg";

}
