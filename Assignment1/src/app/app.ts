import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerList } from './customer-list/customer-list';

@Component({
 
  standalone: true,
  imports: [CustomerList]
})
export class App {
  protected readonly title = signal('Assignment1');
}
