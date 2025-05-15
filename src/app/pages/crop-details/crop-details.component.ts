import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import cropsData from '../../../assets/crops.json';
import { cropType } from '../../../Interfaces/cropType';

@Component({
  selector: 'app-crop-details',
  imports: [CommonModule],
  templateUrl: './crop-details.component.html',
  styleUrl: './crop-details.component.css',
})
export class CropDetailsComponent implements OnInit {
  showCategories = false;

  crops: cropType[] = [];

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  ngOnInit(): void {
    this.crops = cropsData;
  }
}
