import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { runCalculatorDemo } from './calculator.helper';
import { runTaskInterfacesDemo } from './task-interfaces.helper';
import { Manager } from './bankacc.classexample';
import { UserBadgeComponent } from './user-badge/user-badge.component';
import { AppleBoxComponent } from './user-badge/apple-box.component';
import { SubmitBoxComponent } from './user-badge/profile';
import { TaskBoardComponent } from './user-badge/controlflowexample';

@Component({
  imports: [
    RouterOutlet,
    UserBadgeComponent,
    AppleBoxComponent,
    SubmitBoxComponent,
    TaskBoardComponent
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  template: `
    <main>
      <h1>Team Directory</h1>
      <app-user-badge />
      <app-user-badge></app-user-badge>

      <h1>My Fruit Basket</h1>
      <app-apple-box [count]="apples()" (eatClicked)="reduceApple()" />

      <h1>Property Binding Demo</h1>
      <app-submit-box />

      <h1>Task Board</h1>
      <app-task-board />
    </main>

    <router-outlet />
  `,
})
export class App implements OnInit {
  protected readonly title = signal('task-managementng');
  apples = signal(5);

  ngOnInit(): void {
    // runCalculatorDemo();
    runTaskInterfacesDemo();

    const mgr = new Manager("sampada", "Engineering", 120000);
    console.log(mgr.name);
  }

  reduceApple(): void {
    this.apples.update((current) => current - 1);
  }
}
