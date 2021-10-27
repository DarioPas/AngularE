import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  person: User = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 30,
    dateOfBirth: '14 Dicembre 1995',
    address: {
      city: 'Roma',
      street: 'Via Roma 10',
      postalCode: '00100'
    },
    role: 'staff',
    username: 'MarioRossi80',
    profilePhotoUrl: 'assets/Cat.jpg',
    companies: [
      {
        name: 'Develhope',
        description: 'La migliore'
      },
      {
        name: 'Apple',
        description: 'Ensomma'
      }
    ],
    gender: 'male',
  }
  constructor() { }

  ngOnInit(): void {
  }
}
