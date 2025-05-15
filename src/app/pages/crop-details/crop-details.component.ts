import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crop-details',
  imports: [CommonModule],
  templateUrl: './crop-details.component.html',
  styleUrl: './crop-details.component.css'
})
export class CropDetailsComponent {
showCategories = false;

  cropCategories: string[] = [
    'Grains (Rice, Wheat)',
    'Vegetables (Carrot, Potato)',
    'Fruits (Mango, Banana)',
    'Oilseeds (Mustard, Sunflower)'
  ];

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }
}
