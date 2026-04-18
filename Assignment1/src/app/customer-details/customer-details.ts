import { Component, Input } from '@angular/core';
import { Customer } from '../customer'; // ✅ FIXED PATH

@Component({
  selector: 'app-customer-details',
  standalone: true,
  template: `
    <div style="border:1px solid black; margin:10px; padding:10px;">
      <p><b>{{customer.name}}</b></p>
      <p>{{customer.email}}</p>
      <p>{{customer.phone}}</p>
    </div>
  `
})
export class CustomerDetails {
  @Input() customer!: Customer;
}