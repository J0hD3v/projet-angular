import { Component, effect, signal, computed } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signals',
  imports: [NgFor],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
})
export class SignalsComponent {
  // Exemple 1 : Compteur réactif
  count = signal(0);
  multiplier = signal(2);

  // Signal dérivé avec `computed`
  multipliedCount = computed(() => this.count() * this.multiplier());

  // Exemple 2 : Historique des valeurs
  countHistory = signal<number[]>([]);

  // Exemple 3 : Conversion d'unités
  distanceKm = signal(1);
  distanceMiles = computed(() => this.distanceKm() * 0.621371);

  constructor() {
    // Effet pour observer les changements de `count` et mettre à jour l'historique
    effect(() => {
      const currentCount = this.count();
      this.updateHistory(currentCount); // Met à jour l'historique
      console.log(
        `[Effet déclenché] Le compteur est maintenant ${currentCount}, ` +
        `valeur multipliée : ${this.multipliedCount()}. Historique : ${this.countHistory().join(', ')}`
      );
    });
  }

  // Méthodes pour gérer le compteur
  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }

  changeMultiplier(value: any) {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.multiplier.set(parsedValue);
    }
  }

  reset() {
    this.count.set(0);
    this.multiplier.set(2);
    this.countHistory.set([]);
  }

  // Méthode pour mettre à jour l'historique
  private updateHistory(value: number) {
    const history = this.countHistory();
    const maxHistoryLength = 10;
    if (history[history.length - 1] !== value) {
      const newHistory = [...history, value];
      if (newHistory.length > maxHistoryLength) {
        newHistory.shift(); // Supprime la première valeur si la limite est atteinte
      }
      this.countHistory.set(newHistory);
    }
  }

  // Méthodes pour la conversion d'unités
  changeDistanceKm(value: any) {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      this.distanceKm.set(parsedValue);
    }
  }
}