import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'firstNgApp'
  user={
    name:'Abhishek singh',
    address: 'lpu',
    age:21,
    phones:[2766236723, 87237988788],
    gender:'male'
  };
  users=[
    {name:'Arjit',address:'Delhi',age:22,gender:'male',pic:'images/download.jpeg',edit:false},
    {name:'Utkarsh',address:'chandigarh',age:22,gender:'male',edit:true},
    {name:'avni',address:'Delhi',age:22,gender:'female',edit:false} 

  ]

}
