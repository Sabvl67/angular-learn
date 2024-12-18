import { Component, Input } from '@angular/core';
import { DetailComponent } from './detail/detail.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task.service';
import { NewTaskData } from './detail/detail.models';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DetailComponent, NewTaskComponent],
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor( private taskService: TaskService) { }

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}