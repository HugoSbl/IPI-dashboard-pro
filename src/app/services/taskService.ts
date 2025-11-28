import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


export interface TaskType {
    id?: number;
    title: string;
    description: string;
    status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {

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

    private taskSubject = new BehaviorSubject<TaskType[]>(this.tasks);
    public taskObservable = this.taskSubject.asObservable();

    addTask(task: TaskType) {
        this.tasks.push(task);
        this.taskSubject.next(this.tasks);
    }


}
export default TaskService;
