import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  title : string = 'salut les Pipeuses !'

  celsius : number = 26.3

/*  compteur : number = 0

  timer! : any | NodeJS.Timer

  startChrono(){
    this.timer = setInterval(() => {this.compteur++}, 1000)
  }

  pauseChrono(){
    clearInterval(this.timer)
  }

  */

  private intervalId: any;
  private startTime!: number;
  private elapsedTime!: number;

  minutes: number = 0;
  seconds: number = 0;

  start() {
    this.startTime = Date.now() - this.elapsedTime;
    this.intervalId = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.minutes = Math.floor(this.elapsedTime / 60000);
      this.seconds = Math.floor((this.elapsedTime % 60000) / 1000);
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.elapsedTime = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

}
