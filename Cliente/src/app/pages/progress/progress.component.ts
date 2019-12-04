import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number;

  constructor() {
    this.progreso = 50;
  }

  sumarProgreso(value: number) {
    if (this.progreso + value >= 100 ) {
      this.progreso = 100;
    } else if ( this.progreso + value <= 0) {// lo vuelmo a sumar por que -*-  se suma
      this.progreso = 0;
    } else {
      this.progreso += value;
    }
    console.log(this.progreso);
  }

  ngOnInit() {
  }

}
