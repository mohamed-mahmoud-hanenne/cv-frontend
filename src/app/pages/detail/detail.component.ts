import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CvService, CvDetail } from '../../services/cv.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  cv: CvDetail | null = null;
  loading = false;

  constructor(private route: ActivatedRoute, private service: CvService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.service.get(id).subscribe({
      next: (res) => { this.cv = res; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
