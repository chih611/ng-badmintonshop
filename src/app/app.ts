import { Component, signal } from '@angular/core';
import { RacquetListComponent } from './components/racquet-list/racquet-list';

@Component({
  selector: 'app-root',
  imports: [RacquetListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-badmintonshop');
}
