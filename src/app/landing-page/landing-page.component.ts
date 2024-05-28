import { Component } from '@angular/core';
import { ImageCartComponent } from '../image-cart/image-cart.component';
import { FrequentlyBoughtComponent } from '../frequently-bought/frequently-bought.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ImageCartComponent,FrequentlyBoughtComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
