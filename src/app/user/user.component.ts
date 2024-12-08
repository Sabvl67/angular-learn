import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser() {

    }
}