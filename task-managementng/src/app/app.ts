// Component: decorator that defines this class as an Angular component
// OnInit: lifecycle interface for running setup logic once after initialization
// signal: reactive state primitive used here for `title`
import { Component, OnInit, signal } from '@angular/core';

// RouterOutlet: built-in directive that acts as a placeholder for routed views
import { RouterOutlet } from '@angular/router';

// Existing practice/demo imports from your workspace
import { runCalculatorDemo } from './calculator.helper';
import { runTaskInterfacesDemo } from './task-interfaces.helper';
import { Manager } from './bankacc.classexample';

// Import our standalone child component so we can register it and use <app-user-badge />
import { UserBadgeComponent } from './user-badge/user-badge.component';
import { AppleBoxComponent } from './user-badge/apple-box.component';
@Component({
  // Declares dependencies used inside this component's template.
  // Because UserBadgeComponent is in `imports`, Angular allows <app-user-badge /> here.
  imports: [RouterOutlet, UserBadgeComponent, AppleBoxComponent],

  // Root selector where Angular mounts this top-level component (typically in index.html).
  selector: 'app-root',

  // Points to the external SCSS stylesheet scoped to the `App` component.
  styleUrl: './app.scss',

  // Inline template for `App` (using either `template` or `templateUrl`, not both).
  // Renders a heading, two independent instances of UserBadgeComponent, and the router outlet.
  template: `
    <main>
      <h1>Team Directory</h1>
      <app-user-badge />
      <app-user-badge></app-user-badge>
<h1>My Fruit Basket</h1>
    <app-apple-box [count]="apples()" (eatClicked)="reduceApple()" />

    </main>

    <router-outlet /> 
  `,
})// <router-outlet /> A built-in directive from RouterOutlet (also in App's imports).

export class App implements OnInit {
  // Read-only signal holding the app name (`title()` reads its current value).
  protected readonly title = signal('task-managementng');

  // Lifecycle hook called by Angular after initial data-bound properties are set.
  ngOnInit(): void {
    //runCalculatorDemo();
    runTaskInterfacesDemo();

    // Instantiate Manager and log a public property to the browser/dev console.
    const mgr = new Manager("sampada", "Engineering", 120000);
    console.log(mgr.name);         // Allowed: public
    // console.log(mgr.department); // Error: protected
    // console.log(mgr.salary);     // Error: private
  }
  apples = signal(5);
  reduceApple(): void {
    this.apples.update((current) => current - 1);
  }

}
