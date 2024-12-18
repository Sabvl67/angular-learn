import { Component, Input, inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './detail.models';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input({required: true}) task!: Task;
  private taskService = inject(TaskService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id)
  }
}
