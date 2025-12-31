import { Routes } from '@angular/router';
import { UploadComponent } from './pages/upload/upload.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
 { path: '', redirectTo: 'upload', pathMatch: 'full' },
  { path: 'upload', component: UploadComponent },
  { path: 'cvs', component: ListComponent },
  { path: 'cvs/:id', component: DetailComponent },
  { path: '**', redirectTo: 'upload' }
];
