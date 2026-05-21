import { Routes } from '@angular/router';
import { ItemsPageComponent } from './pages/items-page/items-page.component';

export const routes: Routes = [
  { path: '', component: ItemsPageComponent },
  { path: '**', redirectTo: '' },
];
