import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user-list/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() person!: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
