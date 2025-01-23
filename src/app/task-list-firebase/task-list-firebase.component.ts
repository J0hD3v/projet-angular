// MARK: EXO EN COURS
// import { Component } from '@angular/core';
// import { Database, set, ref, push, onValue } from '@angular/fire/database';
// import { FormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';
// import { NgClass } from '@angular/common';
// import { TaskPromiseService } from '../services/task-promise.service';

// @Component({
// selector: 'app-task-list-firebase',
//   imports: [FormsModule, NgFor, NgClass],
//   templateUrl: './task-list-firebase.component.html',
// })
// export class TaskListFirebaseComponent {
//   tasks: { id: string; title: string; status: string }[] = []; // Liste des tâches
//   newTask = { title: '', status: 'pending' }; // Tâche à ajouter

//   constructor(private db: Database, private taskPromiseService: TaskPromiseService) {
//     const tasksRef = ref(this.db, 'tasks');

//     // Récupération en temps réel des tâches
//     onValue(tasksRef, (snapshot) => {
//       const data = snapshot.val();
//       this.tasks = data ? Object.values(data) : [];
//     });
//   }

//   addTask() {
//     if (this.newTask.title.trim()) {
//       const tasksRef = ref(this.db, 'tasks');
//       const newTaskRef = push(tasksRef);
//       set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
//       this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
//     }
//   }

//   deleteTask(taskId:string) {
//     console.log(this.tasks);
//     console.log(taskId);
//     console.log(this.tasks.find(task => task.id === taskId ));
//   }

//   getStyleStatus(status:string) {
//     switch (status) {
//       case "completed":
//         return  "bg-success";
//         break;
      
//       case "pending":
//         return  "bg-warning";
//         break;
    
//       default:
//         return ""
//         break;
//     }
//   }
// }


// MARK: CORRECTION

// import { Component } from '@angular/core';
// import { Task } from '../../models/task.model';
// import { TaskService } from '../../services/task.service';

// import { FormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';

// @Component({
//   selector: 'app-task-list-firebase',
//   imports: [FormsModule, NgFor],
//   template: `
//     <div class="container mt-5">
//       <h2>Liste des tâches</h2>
//       <form (ngSubmit)="addTask()" class="d-flex mb-3">
//         <input
//           [(ngModel)]="newTaskTitle"
//           name="task"
//           type="text"
//           placeholder="Nouvelle tâche"
//           class="form-control me-2"
//         />
//         <button type="submit" class="btn btn-primary">Ajouter</button>
//       </form>

//       <ul class="list-group">
//         <li *ngFor="let task of tasks" class="list-group-item d-flex justify-content-between align-items-center">
//           <div>
//             <input
//               type="checkbox"
//               [(ngModel)]="task.status"
//               (change)="toggleStatus(task)"
//               [checked]="task.status === 'completed'"
//               class="me-2"
//             />
//             <p>{{ task.title }}</p>
//           </div>
//           <button class="btn btn-danger btn-sm" (click)="deleteTask(task.id)">Supprimer</button>
//         </li>
//       </ul>
//     </div>
//   `,
// })
// export class TaskListFirebaseComponent {
//   tasks: Task[] = []; // Liste des tâches
//   newTaskTitle = ''; // Titre de la nouvelle tâche

//   constructor(private taskService: TaskService) {
//     this.taskService.getTasks().subscribe((tasks) => {
//       this.tasks = tasks;
//     });
//   }

//   // Ajouter une tâche
//   addTask(): void {
//     if (this.newTaskTitle.trim()) {
//       const newTask: Task = { title: this.newTaskTitle.trim(), status: 'pending' };
//       this.taskService.addTask(newTask).then(() => {
//         this.newTaskTitle = ''; // Réinitialiser le champ
//       });
//     }
//   }

//   // Changer le statut de la tâche
//   toggleStatus(task: Task): void {
//     task.status = task.status === 'pending' ? 'completed' : 'pending';
//     this.taskService.updateTask(task).catch((err) => console.error(err));
//   }

//   // Supprimer une tâche
//   deleteTask(taskId?: string): void {
//     if (taskId) {
//       this.taskService.deleteTask(taskId).catch((err) => console.error(err));
//     }
//   }
// }



// MARK: Version promise

import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskPromiseService } from '../services/task-promise.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule, NgFor,NgClass],
  template: `
    <div class="container mt-5">
      <h2>Liste des tâches</h2>
      <form (ngSubmit)="addTask()" class="d-flex mb-3">
        <input
          [(ngModel)]="newTaskTitle"
          name="taskTitle"
          type="text"
          placeholder="Nouvelle tâche"
          class="form-control me-2"
        />
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>

      <ul class="list-group">
        <li *ngFor="let task of tasks" class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ task.title }}</span>
            <span class="badge rounded-pill" [ngClass]="{
              'bg-success': task.status === 'completed',
              'bg-warning': task.status === 'pending'
            }">
              {{ task.status }}
            </span>
            <button
              class="btn btn-info btn-sm"
              (click)="toggleStatus(task)"
            >
              Changer le statut
            </button>
            <button
              class="btn btn-danger btn-sm float-end"
              (click)="deleteTask(task.id!)"
            >
              Supprimer
            </button>
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class TaskListFirebaseComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskPromiseService) {}

  ngOnInit() {
    this.loadTasks(); // Charger les tâches au démarrage
  }

  // Charger les tâches depuis Firebase
  async loadTasks() {
    try {
      this.tasks = await this.taskService.getTasks();
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
    }
  }

  // Ajouter une nouvelle tâche
  async addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        title: this.newTaskTitle.trim(),
        status: 'pending',
      };
      try {
        await this.taskService.addTask(newTask);
        this.newTaskTitle = ''; // Réinitialiser le champ
        await this.loadTasks(); // Recharger les tâches
      } catch (error) {
        console.error('Erreur lors de l’ajout de la tâche :', error);
      }
    }
  }

  // Supprimer une tâche
  async deleteTask(taskId: string) {
    try {
      await this.taskService.deleteTask(taskId);
      await this.loadTasks(); // Recharger les tâches après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  }

  // Changer le statut d'une tâche
  async toggleStatus(task: Task) {
    const updatedTask: Task = { ...task, status: task.status === 'pending' ? 'completed' : 'pending' };
    try {
      await this.taskService.updateTask(updatedTask);
      await this.loadTasks(); // Recharger les tâches après mise à jour
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut de la tâche :', error);
    }
  }
}