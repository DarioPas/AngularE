import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user-list/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() person!: User[];

  constructor() { }

  ngOnInit(): void {
  }

  submit(a: number) {
    this.person.splice(a, 1)
  }

}
