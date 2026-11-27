import { Component, signal } from '@angular/core';
import { AppleBoxComponent } from './apple-box.component';

@Component({
  selector: 'app-root',
  imports: [AppleBoxComponent],
  template: `
    <!-- [count]="apples()" sends data IN to the child -->
    <!-- (eatClicked)="reduceApple()" listens when the child fires the event OUT -->
    <app-apple-box
      [count]="apples()"
      (eatClicked)="reduceApple()"
    />
  `
})
export class AppComponent {
  // Parent owns the real data (starts at 5)
  apples = signal(5);

  // Parent updates its own data when the child's event fires
  reduceApple(): void {
    if (this.apples() < 0) {
      console.warn('No more apples left to eat!');
    }
    this.apples.update((current) => current - 1);
  }
}
