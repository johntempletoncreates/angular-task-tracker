import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-apple-box',
  template: `
    <!-- 1. Show the number that came IN from the parent -->
    <p>Apples given to me: {{ count() }}</p>

    <!-- 2. When clicked, send an event OUT to the parent -->
    <button type="button" (click)="eatClicked.emit()">Eat 1 Apple</button>
  `
})
export class AppleBoxComponent {
  // IN: Parent passes a number here. Read it with count().
  count = input.required<number>();

  // OUT: Child fires this event when the button is clicked.
  eatClicked = output<void>();
}
