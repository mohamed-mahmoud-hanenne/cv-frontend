import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CvItem {
  id: number;
  filename: string;
  full_name: string;
  email: string;
}

export interface CvDetail {
  id: number;
  filename: string;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  skills: string[];
}

@Injectable({ providedIn: 'root' })
export class CvService {
  private baseUrl = 'http://127.0.0.1:8000/api/cv';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<CvDetail> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<CvDetail>(`${this.baseUrl}/upload`, fd);
  }

  list(): Observable<CvItem[]> {
    return this.http.get<CvItem[]>(`${this.baseUrl}`);
  }

  get(id: number): Observable<CvDetail> {
    return this.http.get<CvDetail>(`${this.baseUrl}/${id}`);
  }
}
