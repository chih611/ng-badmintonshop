import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Racquet } from '../../models/racquet.model';
import { RacquetService } from '../../services/racquet';
import { PricePipe } from '../../pipe/price-pipe';
import { HighlightDirective } from '../../directive/highlight';

@Component({
  selector: 'app-racquet-list',
  standalone: true,
  imports: [CommonModule, PricePipe, HighlightDirective],
  templateUrl: './racquet-list.html',
  styleUrls: ['./racquet-list.css'],
})
export class RacquetListComponent implements OnInit {
  racquets: Racquet[] = [];
  loading = true;

  constructor(private racquetService: RacquetService) {}

  ngOnInit() {
    this.racquetService.getRacquets().subscribe({
      next: (data) => {
        this.racquets = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading racquets:', err);
        this.loading = false;
      },
    });
  }
}
