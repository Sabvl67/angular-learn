import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from './detail.models';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter();

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
