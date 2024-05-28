import { Component } from '@angular/core';
import { FrequentlyBoughtProductsInterface } from './interface/FrequentlyBoughtProductsInterface.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-frequently-bought',
  standalone: true,
  imports: [NgFor],
  templateUrl: './frequently-bought.component.html',
  styleUrl: './frequently-bought.component.css'
})
export class FrequentlyBoughtComponent {
  
  Frequentproducts1: FrequentlyBoughtProductsInterface[] = [
    { url: '../../assets/armchair.webp', name: 'Little Armchair Sheepskin', price: 7000 },
    { url: '../../assets/toaster.webp', name: 'Pop-Up Toaster', price: 7000 },
    { url: '../../assets/golden-morder-light.webp', name: 'Golden mordern light', price: 7000 },
    { url: '../../assets/b&wlamp.webp', name: 'Black and White Lamp', price: 7000 },
  ];
  Frequentproducts2: FrequentlyBoughtProductsInterface[] = [
    { url: '../../assets/babyoil.webp', name: 'Little Armchair Sheepskin', price: 7000 },
    { url: '../../assets/blackshelf.webp', name: 'Pop-Up Toaster', price: 7000 },
    { url: '../../assets/compartment-shelf.webp', name: 'Golden mordern light', price: 7000 },
    { url: '../../assets/lamp-light-blue.webp', name: 'Black and White Lamp', price: 7000 },
  ];

}
