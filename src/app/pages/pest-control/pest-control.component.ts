import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import pestData from '../../../assets/pests.json';
import { pestType } from '../../../Interfaces/pestType';

@Component({
  selector: 'app-pest-control',
  imports: [CommonModule],
  templateUrl: './pest-control.component.html',
  styleUrl: './pest-control.component.css',
})
export class PestControlComponent implements OnInit {
  pestData: pestType[] = [];
  ngOnInit(): void {
    this.pestData = pestData;
  }
  selectedImage: string | null = null;

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
