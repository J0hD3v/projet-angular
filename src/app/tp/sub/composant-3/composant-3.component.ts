import { Component } from '@angular/core';
import { Composant6Component } from './sub-sub/composant-6/composant-6.component';
import { Composant7Component } from './sub-sub/composant-7/composant-7.component';

@Component({
  selector: 'app-composant-3',
  imports: [
    Composant6Component,
    Composant7Component,
  ],
  templateUrl: './composant-3.component.html',
  styleUrl: './composant-3.component.css'
})
export class Composant3Component {

}
