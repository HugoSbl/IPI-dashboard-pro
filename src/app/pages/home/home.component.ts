import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZardButtonComponent } from 'src/app/components/ui/button/button.component';
import { ZardCardComponent } from 'src/app/components/ui/card/card.component';
import { TaskService, TaskType } from 'src/app/services/taskService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ZardButtonComponent,
    ZardCardComponent,
  ],
  template: `
    <div class="container mx-auto p-8 flex justify-center items-center min-h-[80vh]">
      <z-card class="w-full max-w-lg shadow-xl border-neutral-200 dark:border-neutral-800"
              zTitle="Home Page"
              zDescription="Welcome to your premium dashboard.">
        <div class="space-y-4">
          <p class="text-neutral-600 dark:text-neutral-400">
            HOME
          </p>
          <h2>Task List</h2>
          @if (tasks) {
            <ul>
              @for (task of tasks | async; track task.id) {
                <li>{{ task.title }}</li>
              }
            </ul>
          } @else {
            <p>No tasks available.</p>
          }
          <button z-button class="w-full" (click)="taskService.addTask({title: 'test', description: 'test', status: 'pending'})">Ajouter une tache</button>
        </div>
      </z-card>
    </div>
  `,
  styles: []
})
export class HomeComponent {
  taskService: TaskService = inject(TaskService);

  tasks = this.taskService.taskObservable;

}



