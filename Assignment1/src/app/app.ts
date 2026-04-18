import { Component, signal } from '@angular/core';
import { CustomerList } from './customer-list/customer-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerList],
  templateUrl: './app.html'   
})
export class App {
  protected readonly title = signal('Assignment1');
}