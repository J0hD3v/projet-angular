import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-tp-directives',
  imports: [
    NgIf,
    NgFor,
    NgStyle,
  ],
  templateUrl: './tp-directives.component.html',
  styleUrl: './tp-directives.component.css'
})
export class TpDirectivesComponent {
  isDisplayed: boolean = false
  displayedArray: number[] = []
  changeVisibility():void {
    this.isDisplayed = !this.isDisplayed
  }
  boostArray():void {
    this.displayedArray.push(this.displayedArray.length +1)
  }
}
