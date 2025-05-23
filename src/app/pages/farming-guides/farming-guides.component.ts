import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { farming_guide_type } from '../../../Interfaces/farming-guide-type';
import farmingGuides from '../../../assets/farming-guides.json';

@Component({
  selector: 'app-farming-guides',
  imports: [CommonModule, RouterLink],
  templateUrl: './farming-guides.component.html',
  styleUrl: './farming-guides.component.css',
})
export class FarmingGuidesComponent {
  guides: farming_guide_type[] = farmingGuides;

  selectedGuide: any = null;

  openGuide(guide: any) {
    this.selectedGuide = guide;
  }

  closeGuide() {
    this.selectedGuide = null;
  }
}
