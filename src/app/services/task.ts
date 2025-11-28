import { Injectable } from '@angular/core';
import { of } from 'rxjs';


export interface TaskType {
    id: number;
    title: string;
    description: string;
    status: string;
}

@Injectable({
  providedIn: 'root',
})
export class Task {

    public tasks: TaskType[] = [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        status: 'pending',
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
        status: 'pending',
      },
      {
        id: 3,
        title: 'Task 3',
        description: 'Description 3',
        status: 'pending',
      },
    ];

    public getTasks() {
        return of(this.tasks);
    }
}
export default Task;
