import { Component } from '@angular/core';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
selector: 'app-task-list-firebase',
  imports: [FormsModule, NgFor],
  template: `
    <div class="container mt-5">
      <h2>Liste des tâches</h2>
      <form (ngSubmit)="addTask()" class="d-flex mb-3">
        <input
          [(ngModel)]="newTask.title"
          name="task"
          type="text"
          placeholder="Nouvelle tâche"
          class="form-control me-2"
        />
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>

      <ul class="list-group">
        <li *ngFor="let task of tasks" class="list-group-item">
          {{ task.title }}
        </li>
      </ul>
    </div>
  `,
})
export class TaskListFirebaseComponent {
  tasks: { title: string; status: string }[] = []; // Liste des tâches
  newTask = { title: '', status: 'pending' }; // Tâche à ajouter

  constructor(private db: Database) {
    const tasksRef = ref(this.db, 'tasks');

    // Récupération en temps réel des tâches
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      this.tasks = data ? Object.values(data) : [];
    });
  }

  addTask() {
    if (this.newTask.title.trim()) {
      const tasksRef = ref(this.db, 'tasks');
      const newTaskRef = push(tasksRef);
      set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
      this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
    }
  }
}