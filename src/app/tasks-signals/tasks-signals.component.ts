import { Component, effect, signal, computed } from '@angular/core';
import { TaskSignal } from '../models/task.model';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-signals',
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    NgClass,
  ],
  templateUrl: './tasks-signals.component.html',
  styleUrl: './tasks-signals.component.css'
})
export class TasksSignalsComponent {

  // Variables

  tasks:TaskSignal[] = [];
  newTask = signal(<TaskSignal>{});
  newTaskTitle = signal(<string>'');
  newTaskPriority = signal(<{value: 'haute', order: 2} | {value: 'moyenne', order: 1} | {value: 'basse', order: 0}>{value: 'moyenne', order: 1});
  newTaskComplete = signal(<true | false>false);
  isTodoListEmpty:boolean = this.calculRemainingTasks() != 0 ? false : true;
  titleBorder:string = '';


  constructor() {
    effect(() => {
      this.newTask.set({
        title: this.newTaskTitle(),
        priority: this.newTaskPriority(),
        complete: this.newTaskComplete()
      })
    })
  }

  // Methods

  getStyleStatus(complete:boolean) {
    switch (complete) {
      case true:
        return  "bg-success";
        break;
      
      default:
        return ""
        break;
    }
  }

  updateNewTaskTitle(title:any) {
    let newTitle = title.target.value
    this.newTaskTitle.set(newTitle);
  }
  updateNewTaskPriority(priority:any) {
    let newPriority = priority.target.value;
    let newPriorityOrder = 1;
    switch (newPriority) {
      case 'haute':
        newPriorityOrder = 2;
        break;
      case 'basse':
        newPriorityOrder = 0;
        break;
      default:
        break;
    }
    this.newTaskPriority.set({value:newPriority, order: newPriorityOrder as 0 | 1 | 2});
  }

  addTask() {
    if(this.newTask().title != ''){
      this.tasks.push(this.newTask());
      this.orderList();
      // reset newTask
      this.newTask.set({
        title: this.newTaskTitle(),
        priority: this.newTaskPriority(),
        complete: this.newTaskComplete()
      })
      // reset border color
      this.titleBorder = '';
    } else {
      this.titleBorder = 'border border-danger';
    }
  }

  deleteTask(task:TaskSignal):void {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

  markAsDone(task:TaskSignal):void {
    task.complete = true;
  }

  orderList():void {
    function order(a:TaskSignal,b:TaskSignal) {
      if ( a.priority.order > b.priority.order ){
        return -1;
      }
      if ( a.priority.order < b.priority.order ){
        return 1;
      }
      return 0;
    }
    this.tasks.sort(order);
  }

  calculCompletedTasks():number {
    let result = this.tasks.filter(task => task.complete === true).length
    return result;
  }

  calculRemainingTasks():number {
    let result = this.tasks.filter(task => task.complete === false).length;
    this.isTodoListEmpty = result != 0 ? false : true;
    return result;
  }

}
