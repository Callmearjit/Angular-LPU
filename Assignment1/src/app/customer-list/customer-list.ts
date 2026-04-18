import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerDetails } from '../customer-details/customer-details';
@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule,FormsModule, CustomerDetails],   // ✅ ADD THIS
  templateUrl: './customer-list.html'
})
export class CustomerList implements OnInit {

  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  pagedCustomers: Customer[] = [];

  currentPage = 1;
  pageSize = 5;
  searchText = '';

  ngOnInit() {
    // Dummy data
    this.customers = [
     
    {id: 1,name:'Arjit',address:'Delhi',email:'abcd@gmail.com',phone:'4879878787',dateOfBirth:'26-06-2001',gender:'male'},
    {id: 2,name:'Utkarsh',address:'Bihar',email:'abcbd@gmail.com',phone:'4879878787',dateOfBirth:'26-04-2005',gender:'male'},
    {id: 3,name:'Jayshree',address:'Hyderabad',email:'abcfd@gmail.com',phone:'48798098787',dateOfBirth:'02-06-2009',gender:'female'},
    {id: 4,name:'Flash',address:'Delhi',email:'abcgd@gmail.com',phone:'4879878787',dateOfBirth:'26-06-1990' , gender:'male'},
    {id: 5,name:'Superman',address:'haryana',email:'abcd@gmail.com',phone:'4879878787',dateOfBirth:'26-06-1995',gender:'male'},
    {id: 6,name:'Batman',address:'Siwan',email:'abckd@gmail.com',phone:'4879878787',dateOfBirth:'26-07-2019',gender:'male'},
    {id: 7,name:'smriti',address:'Patna',email:'abcfd@gmail.com',phone:'4879878787',dateOfBirth:'26-08-2008',gender:'female'},
    {id: 8,name:'Aditya',address:'Agra',email:'abctd@gmail.com',phone:'4879878787',dateOfBirth:'26-03-2010',gender:'male'},
    {id: 9,name:'kjsdg',address:'Sunderban',email:'abecd@gmail.com',phone:'4879878787',dateOfBirth:'26-02-1800',gender:'female'},
    {id: 10,name:'Arj',address:'Assam',email:'abcxd@gmail.com',phone:'4879878787',dateOfBirth:'26-01-1902',gender:'male'},
    {id: 11,name:'Bala',address:'Utrakhand',email:'albcd@gmail.com',phone:'4879878787',dateOfBirth:'26-04-2000',gender:'male'},
    {id: 12,name:'Shre',address:'Patna',email:'abwcd@gmail.com',phone:'4879878787',dateOfBirth:'26-06-1985',gender:'female'}
    ];

    this.filteredCustomers = [...this.customers];
    this.updatePagedCustomers();
  }

  updatePagedCustomers() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedCustomers = this.filteredCustomers.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.filteredCustomers.length) {
      this.currentPage++;
      this.updatePagedCustomers();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedCustomers();
    }
  }

  search() {
    this.filteredCustomers = this.customers.filter(c =>
      c.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.currentPage = 1;
    this.updatePagedCustomers();
  }
}