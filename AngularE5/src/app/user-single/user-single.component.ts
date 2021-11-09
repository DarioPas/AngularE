import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() users!: User[];
  @Output() sendIndexUser = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  send(a: number) {
    this.sendIndexUser.emit(a)
  }

}
