import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent {

selector : number = 2;

  users : user[] = [
    {name : 'Patrick', age : 42},
    {name : 'Pili', age : 44},
    {name : 'Minou', age : 33},
    {name : 'Patou', age : 21}

  ]

  display : boolean = true;

  setDisplay() {
    this.display = !this.display
  }

  newUserName: string = '' ;
  newUserAge: number = 0;

  addNewUser() {
    this.users.push({ name: this.newUserName, age: this.newUserAge });
    this.newUserName;
    this.newUserAge;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }


  trackByIndex(index: number, user: any): number {
    return index;
  }



}


export interface user {
  name : string,
  age : number
}
