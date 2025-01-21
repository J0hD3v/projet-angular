import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports:[FormsModule,NgIf],
  template: `
    <div class="container mt-5">
      <h1>Connexion avec Email et Mot de Passe</h1>

      <div>
        <input [(ngModel)]="email" type="email" placeholder="Email" class="form-control mb-3" />
        <input [(ngModel)]="password" type="password" placeholder="Mot de passe" class="form-control mb-3" />

        <button (click)="signIn()" class="btn btn-success">Se connecter</button>
      </div>

      <div *ngIf="user">
        <p>Utilisateur connecté: {{ user.email }}</p>
      </div>

      <div *ngIf="error" class="alert alert-danger mt-3">
        <p>{{ error }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);

  constructor() {}

  signIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur connecté:', userCredential);
      })
      .catch((error) => {
        this.error = error.message;
        console.error('Erreur de connexion:', error);
      });
  }
}