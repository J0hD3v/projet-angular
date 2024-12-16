import { Component } from '@angular/core';
import { Composant1Component } from '../sub/composant-1/composant-1.component';
import { Composant2Component } from '../sub/composant-2/composant-2.component';
import { Composant3Component } from '../sub/composant-3/composant-3.component';

@Component({
  selector: 'app-component-manip',
  imports: [
    Composant1Component,
    Composant2Component,
    Composant3Component,
  ],
  templateUrl: './component-manip.component.html',
  styleUrl: './component-manip.component.css'
})
export class ComponentManipComponent {

}
