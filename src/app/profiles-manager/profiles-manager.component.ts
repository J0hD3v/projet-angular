import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-profiles-manager',
  imports: [
    RouterLink,
    FormsModule,
    NgFor,
  ],
  templateUrl: './profiles-manager.component.html',
  styleUrl: './profiles-manager.component.css'
})
export class ProfilesManagerComponent {

  constructor(public profils: ProfilesService) {
    this.profilsArray = this.profils.profils
  }

  profilsArray: any[] = []
  name:string = ''
  status:string = ''
  id:string = ''

  onAjouterProfil():void {
    this.profils.addProfile(this.name, this.status);
  }
  onMettreEnLigne(id:string):void {
    this.profils.updateStatus(id, 'Online');
  }
  onMettreHorsLigne(id:string):void {
    this.profils.updateStatus(id, 'Offline');
  }

}
