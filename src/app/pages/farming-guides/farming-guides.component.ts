import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farming-guides',
  imports: [CommonModule, RouterLink],
  templateUrl: './farming-guides.component.html',
  styleUrl: './farming-guides.component.css',
})
export class FarmingGuidesComponent {
  guides = [
    {
      id: 1,
      title: 'How to Grow Organic Vegetables',
      summary:
        'Learn the basics of growing healthy organic vegetables with minimal effort.',
      image: '/how-to-grow-organic.jpg',
    },
    {
      id: 2,
      title: 'Soil Preparation Tips',
      summary:
        'Proper soil preparation is key to a successful harvest. Here’s how to do it right.',
      image: '/Soil-prep.jpg',
    },
    {
      id: 3,
      title: 'Water Management for Crops',
      summary:
        'Efficient irrigation strategies to conserve water and boost crop yield.',
      image: '/water-management-for-crops.png',
    },
  ];
}
