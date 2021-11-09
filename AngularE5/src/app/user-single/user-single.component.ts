import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() users!: User[];
  @Output() sendIndexUser = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }

  send(u: User) {
    this.sendIndexUser.emit(u);
  }

  changeColor(role: string): any {
    if (role === 'staff') {
      return 'black';
    } else if (role === 'admin') {
      return 'green'
    } else if (role === 'manager') {
      return 'blue'
    }
  }
}
