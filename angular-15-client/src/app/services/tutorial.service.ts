import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.BACK_URL}/api/tutorials`;
  }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.baseUrl}?title=${title}`);
  }
}
