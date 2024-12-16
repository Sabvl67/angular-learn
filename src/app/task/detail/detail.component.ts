import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './detail.models';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
