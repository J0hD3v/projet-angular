import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profil-details',
  imports: [
    RouterLink
  ],
  templateUrl: './profil-details.component.html',
  styleUrl: './profil-details.component.css'
})
export class ProfilDetailsComponent {
  profil: any

  constructor(public profils: ProfilesService) {
    const url = (window.location.pathname);
    const id = url.split("/").pop();
    const profil = this.profils.profils.find(item => item.id === id);
    if (profil != undefined) {
      this.profil = profil;
      console.log(this.profil);
    } else {
      this.profil = {};
    }
  }
}
