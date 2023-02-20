import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent {

  compteur : number = 0;

  private intervalId: any;
  private startTime!: number;
  private elapsedTime: number = 0;



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
