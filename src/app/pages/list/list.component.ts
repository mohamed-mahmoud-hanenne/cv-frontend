import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CvService, CvItem } from '../../services/cv.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cvs: CvItem[] = [];
  loading = false;
  q = '';

  constructor(private cv: CvService) {}

  ngOnInit(): void {
    this.loading = true;
    this.cv.list().subscribe({
      next: (res) => { this.cvs = res; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  filtered(): CvItem[] {
    const t = this.q.trim().toLowerCase();
    if (!t) return this.cvs;
    return this.cvs.filter(x =>
      (x.full_name || '').toLowerCase().includes(t) ||
      (x.email || '').toLowerCase().includes(t) ||
      (x.filename || '').toLowerCase().includes(t)
    );
  }
}
