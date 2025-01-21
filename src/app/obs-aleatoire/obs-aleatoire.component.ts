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
  listEvenNumbers:Array<number> = [];
  onlyEven:boolean = false;

  constructor() {
    this.generateRandomSubscription = new Subscription(); // Initialisation ici
  }

  start() {
    // Lance la génération de nombres aléatoires
    this.isRunning = true;
    this.generateRandomSubscription = this.laSource.subscribe((count) => {
      while(this.listValues.length >= 10) {
        this.listValues.shift();
      }
      while(this.listEvenNumbers.length >= 10) {
        this.listEvenNumbers.shift();
      }
      this.randomNumber = Math.floor(Math.random()*100);
      this.listValues.push(this.randomNumber);
      console.log(this.randomNumber);
    });
  }
  
  pause() {
    // Met en pause la génération de nbr aléatoires (appuyer sur Reprendre pour continuer en gardant la liste)
    this.isRunning = false;
    this.generateRandomSubscription.unsubscribe();
  }
  
  resume() {
    // Interrompt la pause
    this.start();
  }
  
  stop() {
    // Arrête la génération de nombre aléatoires (efface la liste)
    this.pause();
    this.listValues = [];
  }

  changeVisibilityEvenOdd() {
    // toggle visibilité nombres impairs
    this.onlyEven = !this.onlyEven;
  }

  getArray() {
    // retourne le tableau de nombres complet ou seulement les nombres pairs
    this.listEvenNumbers = this.listValues.filter(number => number%2 == 0);
    return this.onlyEven ? this.listEvenNumbers : this.listValues;
  }

  getClass(number:number) {
    // retourne le style correspondant au nombre
    return number > 50 ? 'bg-danger-subtle' : 'bg-primary-subtle';
  }

  getAdj(number:number) {
    //
    return number > 50 ? 'Elevé' : 'Faible';
  }
}
