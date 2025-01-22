import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgIf,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menu1:string = "Menu 1"

  currentUser: string | null = null;

  constructor(private auth: Auth) {
    // Vérifier si un utilisateur est connecté
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);

        this.currentUser = user.email; // Ou utilisez `user.displayName` si disponible
      } else {
        this.currentUser = null;
      }
    });
  }

  async logOut(): Promise<void> {
    // console.log(this.currentUser);
    try {
      await signOut(this.auth);
      console.log('Utilisateur déconnecté avec succès.');
      this.currentUser = null; // Réinitialiser l'état utilisateur
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }
}
