import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CvService, CvDetail } from '../../services/cv.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  file: File | null = null;
  loading = false;
  result: CvDetail | null = null;
  error = '';

  constructor(private cv: CvService) {}

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.file = input.files?.[0] ?? null;
  }

  upload() {
    if (!this.file) return;

    this.loading = true;
    this.result = null;
    this.error = '';

    this.cv.upload(this.file).subscribe({
      next: (res) => { this.result = res; this.loading = false; },
      error: (err) => {
        this.error = err?.error?.detail || 'Erreur upload';
        this.loading = false;
      }
    });
  }
}
