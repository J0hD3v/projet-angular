import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

interface logMessage {
  id: number | null,
  actionBy: string | null,
  actionType: string | null,
  actionValue: number | null,
}

@Component({
  selector: 'app-pokemon-game',
  imports: [
    NgIf,
    NgFor,
    NgStyle,
  ],
  templateUrl: './pokemon-game.component.html',
  styleUrl: './pokemon-game.component.css'
})


export class PokemonGameComponent {

  playerHealth:any = {value:100};
  monsterHealth:any = {value:100};
  currentRound:any = {value:0};
  winner:string | null = "";
  logMessages:Array<logMessage> = [];

  getRandomValue = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;


  monsterBarStyles() {
    return {
      width: this.monsterHealth.value > 0 ? `${this.monsterHealth.value}%` : "0%"
    }
  };

  playerBarStyles() {
    return {
      width: this.playerHealth.value > 0 ? `${this.playerHealth.value}%` : "0%",
    }
  };

  mayUseSpecialAttack() {
    return this.currentRound.value % 3 == 0;
  }

  startGame = () => {
    this.playerHealth.value = 100;
    this.monsterHealth.value = 100;
    this.winner = null;
    this.currentRound.value = 0;
    this.logMessages.splice(0, this.logMessages.length); // Clear the log
  };


  attackMonster = () => {
    this.currentRound.value++;
    const attackValue = this.getRandomValue(5, 12);
    this.monsterHealth.value -= attackValue;
    if (this.monsterHealth.value <= 0 && this.playerHealth.value <= 0) {
      this.winner = "draw";
    } else if (this.monsterHealth.value <= 0) {
      this.winner = "player";
    }
    this.addLogMessage("player", "attack", attackValue);
    this.attackPlayer();
  };

  attackPlayer = () => {
    const attackValue = this.getRandomValue(8, 15);
    this.playerHealth.value -= attackValue;
    this.addLogMessage("monster", "attack", attackValue);
  };

  specialAttackMonster = () => {
    this.currentRound.value++;
    const attackValue = this.getRandomValue(10, 25);
    this.monsterHealth.value -= attackValue;
    if (this.monsterHealth.value <= 0 && this.playerHealth.value <= 0) {
      this.winner = "draw";
    } else if (this.monsterHealth.value <= 0) {
      this.winner = "player";
    }
    this.addLogMessage("player", "attack", attackValue);
    this.attackPlayer();
  };

  healPlayer = () => {
    this.currentRound.value++;
    const healValue = this.getRandomValue(8, 20);
    this.playerHealth.value = Math.min(this.playerHealth.value + healValue, 100);
    this.addLogMessage("player", "heal", healValue);
    this.attackPlayer();
  };

  surrender = () => {
    this.winner = "monster";
  };

  addLogMessage = (actionBy: "player" | "monster", actionType: "attack" | "heal", actionValue: number) => {
    this.logMessages.push({
        id: Date.now(),
        actionBy,
        actionType,
        actionValue,
    });
  };

}
