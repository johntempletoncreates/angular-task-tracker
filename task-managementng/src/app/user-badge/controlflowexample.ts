import { Component, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-task-board',
  template: `
    <button type="button" (click)="showCompleted.update((v) => !v)">
      {{ showCompleted() ? 'Hide Completed' : 'Show Completed' }}
    </button>

    @if (showCompleted()) {
      <ul>
        @for (task of tasks(); track task.id) {
          <li>
            #{{ $index + 1 }} — {{ task.title }}
            @if (task.done) {
              <strong>(Done)</strong>
            } @else {
              <span>(Pending)</span>
            }
          </li>
        } @empty {
          <li>No tasks available.</li>
        }
      </ul>
    } @else {
      <p>Task list is hidden.</p>
    }
  `
})
export class TaskBoardComponent {
  showCompleted = signal(true);

  tasks = signal<Task[]>([
    { id: 1, title: 'Review PR', done: true },
    { id: 2, title: 'Write unit tests', done: false }
  ]);
}
