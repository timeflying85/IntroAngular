import { Component } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})

export class ListUserComponent {

  get isValid() : boolean {
    return this.users.filter(u => u.name === this.name).length != 0
    && this.name.trim() != ''
    && this.age != undefined
    && this.age > 0
  }

  users : user[] = []

  name : string = '';

  age : number = 0;

  addUser() {
    this.users.push(
      {
        name : this.name,
        age : this.age
      }
    )
  }

  removeUser(index : number){
    this.users.splice(index,1)

  }


}

export interface user{
  name : string,
  age: number
}
