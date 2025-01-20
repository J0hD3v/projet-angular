import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Subscription, interval } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-obs-aleatoire',
  imports: [
    NgIf,
    NgFor,
    FormsModule,
  ],
  templateUrl: './obs-aleatoire.component.html',
  styleUrl: './obs-aleatoire.component.css'
})
export class ObsAleatoireComponent {

  private generateRandomSubscription: Subscription;
  isRunning:boolean = false;
  randomNumber:number = 0;
  laSource = interval(1000);
  listValues:Array<number> = [];
  onlyEven:boolean = false;

  constructor() {
    this.generateRandomSubscription = new Subscription(); // Initialisation ici
  }

  start() {
    //
    this.generateRandomSubscription = this.laSource.subscribe((count) => {
      this.randomNumber = Math.floor(Math.random()*100);
      this.listValues.push(this.randomNumber);
      this.isRunning = true;
      console.log(this.randomNumber); // Affiche dans la console
    });
  }
  
  pause() {
    //
    this.generateRandomSubscription.unsubscribe();
    this.isRunning = false;
  }
  
  resume() {
    //
    this.start();
  }
  
  stop() {
    //
    this.pause();
    this.listValues = [];
  }

  changeVisibilityEvenOdd() {
    //
    this.onlyEven = !this.onlyEven;
  }
}
