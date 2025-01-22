import { Component } from '@angular/core';

interface logMessage {
  id: number | null,
  actionBy: string | null,
  actionType: string | null,
  actionValue: number | null,
}

@Component({
  selector: 'app-pokemon-game',
  imports: [],
  templateUrl: './pokemon-game.component.html',
  styleUrl: './pokemon-game.component.css'
})


export class PokemonGameComponent {

  playerHealth:any = {value:100};
  monsterHealth:any = {value:100};
  currentRound:any = {value:0};
  winner:any = {value:""};
  logMessage:logMessage = {
    id: null,
    actionBy: null,
    actionType: null,
    actionValue: null,
  };

  getRandomValue = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;


  monsterBarStyles = {
      width: this.monsterHealth.value > 0 ? `${this.monsterHealth.value}%` : "0%",
  };

  playerBarStyles = {
      width: this.playerHealth.value > 0 ? `${this.playerHealth.value}%` : "0%",
  };

  mayUseSpecialAttack = this.currentRound.value % 3 !== 0;

  startGame = () => {
    this.playerHealth.value = 100;
    this.monsterHealth.value = 100;
    this.winner.value = "";
    this.currentRound.value = 0;
    this.logMessage = {
      id: null,
      actionBy: null,
      actionType: null,
      actionValue: null,
    }; // Clear the log
  };


  attackMonster = () => {
    this.currentRound.value++;
    const attackValue = this.getRandomValue(5, 12);
    this.monsterHealth.value -= attackValue;
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
    this.winner.value = "monster";
  };

  addLogMessage = (actionBy: "player" | "monster", actionType: "attack" | "heal", actionValue: number) => {
    this.logMessage = {
        id: Date.now(),
        actionBy,
        actionType,
        actionValue,
    };
  };

}
