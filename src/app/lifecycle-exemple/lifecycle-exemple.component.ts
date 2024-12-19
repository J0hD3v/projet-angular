import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-exemple',
  imports: [NgFor],
  // templateUrl: './lifecycle-exemple.component.html',
  template: ` <div class="container mt-5">
    <h1>Angular Lifecycle Demo</h1>

    <!-- Counter Example -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">Counter Example</h5>
        <p>Counter: {{ counter }}</p>
        <button class="btn btn-primary" (click)="incrementCounter()">
          Increment Counter
        </button>
      </div>
    </div>

    <!-- setTimeout Example -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">setTimeout Example</h5>
        <p>{{ timeoutMessage }}</p>
      </div>
    </div>

    <!-- setInterval Example -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">setInterval Example</h5>
        <p>Interval Count: {{ intervalCounter }}</p>
        <button class="btn btn-warning" (click)="pauseInterval()">
          Pause Interval
        </button>
      </div>
    </div>

    <!-- Lifecycle Logs -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Lifecycle Logs</h5>
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let log of lifecycleLogs">
            {{ log }}
          </li>
        </ul>
      </div>
    </div>
  </div>`,
  styleUrl: './lifecycle-exemple.component.css',
})
export class LifecycleExempleComponent {
  counter = 0;
  timeoutMessage = 'Waiting for timeout...';
  intervalCounter = 0;
  lifecycleLogs: string[] = [];
  private intervalId: any;

  constructor() {
    this.logLifecycle('Constructor: Component instance created.');
  }

  ngOnInit(): void {
    this.logLifecycle('ngOnInit: Component initialization.');

    // Simulate async operation with setTimeout
    setTimeout(() => {
      this.timeoutMessage = 'Timeout completed!';
      this.logLifecycle('setTimeout: Timeout completed.');
    }, 3000);

    // Start interval counter
    this.intervalId = setInterval(() => {
      this.intervalCounter++;
      this.logLifecycle('setInterval: Interval counter updated.');
    }, 1000);
  }

  ngDoCheck(): void {
    this.logLifecycle('ngDoCheck: Change detection triggered.');
  }

  ngAfterViewInit(): void {
    this.logLifecycle('ngAfterViewInit: Child views initialized.');
  }

  ngAfterViewChecked(): void {
    this.logLifecycle('ngAfterViewChecked: Child views checked.');
  }

  ngOnDestroy(): void {
    this.logLifecycle('ngOnDestroy: Component is being destroyed.');

    // Clean up interval
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.logLifecycle('ngOnDestroy: Interval cleared.');
    }
    this.pauseInterval();
  }

  incrementCounter(): void {
    this.counter++;
    this.logLifecycle(`Counter incremented to ${this.counter}.`);
  }

  private logLifecycle(message: string): void {
    this.lifecycleLogs.push(message);
    console.log(message);
  }

  pauseInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.logLifecycle('setInterval: Interval paused.');
    }
  }
}