// Import the @Component decorator from Angular's core library so we can
// define a UI component class and attach metadata to it.
import { Component } from '@angular/core';

@Component({
  // Custom HTML tag name used to place this component inside another template
  // (e.g., <app-user-badge /> or <app-user-badge></app-user-badge>).
  selector: 'app-user-badge',

  // Inline HTML template rendered whenever <app-user-badge> is on screen.
  // {{ username }} and {{ role }} are "interpolation" expressions that read
  // matching properties from the component class below and insert their values.
  template: `
    <div class="badge-card">
      <p>Hello, {{ username }}! Role: {{ role }}</p>
    </div>
  `,

  // Inline component-scoped CSS. Because Angular uses view encapsulation by
  // default, .badge-card is scoped to this component's own template and won't
  // accidentally collide with same-named classes in other components.
  styles: `
    .badge-card {
      padding: 0.75rem 1rem;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      background: #f8fafc;
      color: #0f172a;
      margin: 0.75rem 0;
    }
  `
})
// Standalone by default (no @NgModule or `standalone: true` needed).
// `export` allows other files (like app.ts) to import and use this class.
export class UserBadgeComponent {
  // Component state (properties) bound to the template above via {{ ... }}.
  username = 'Aarav';
  role = 'Frontend Developer';
}
