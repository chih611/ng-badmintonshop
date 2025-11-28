import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Racquet } from '../models/racquet.model';

@Injectable({
  providedIn: 'root', // available globally
})
export class RacquetService {
  private apiUrl = 'https://chih611.github.io/api_badminton/racquets_1000.json';

  constructor(private http: HttpClient) {}

  getRacquets(): Observable<Racquet[]> {
    return this.http.get<Racquet[]>(this.apiUrl);
  }
}
