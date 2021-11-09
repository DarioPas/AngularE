import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

}
