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
  @Output() sendIndexUser = new EventEmitter<number>()
  @Output() sendRole = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  send(a: number) {
    this.sendIndexUser.emit(a);
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
