import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports:[FormsModule,NgIf],
  template: `
    <div class="container mt-5">
      <h1>Inscription avec Email et Mot de Passe</h1>

      <div>
        <input [(ngModel)]="email" type="email" placeholder="Email" class="form-control mb-3" />
        <input [(ngModel)]="password" type="password" placeholder="Mot de passe" class="form-control mb-3" />

        <button (click)="signUp()" class="btn btn-primary">S'inscrire</button>
      </div>

      <div *ngIf="user">
        <p>Utilisateur inscrit: {{ user.email }}</p>
      </div>

      <div *ngIf="error" class="alert alert-danger mt-3">
        <p>{{ error }}</p>
      </div>

      <div class="mt-4">
        <a href="https://console.firebase.google.com/project/adrar-projet-ancular/authentication/users">Vers la page Firebase - Users</a>
      </div>
    </div>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);

  constructor() {}

  signUp() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur inscrit:', userCredential);
        this.error = null;
      })
      .catch((error) => {
        this.error = error.message;
        console.error('Erreur d\'inscription:', error);
      });
  }
}