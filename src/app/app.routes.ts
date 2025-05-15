import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FarmingGuidesComponent } from './pages/farming-guides/farming-guides.component';
import { CropDetailsComponent } from './pages/crop-details/crop-details.component';
import { PestControlComponent } from './pages/pest-control/pest-control.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'farming-guides', component: FarmingGuidesComponent },
  { path: 'crop-details', component: CropDetailsComponent },
  { path: 'pest-control', component: PestControlComponent },
  { path: 'contact', component: ContactComponent },
];
