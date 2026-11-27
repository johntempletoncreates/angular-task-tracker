// Import the @Component decorator and signal utilities from Angular's core library.
import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

interface UserProfile {
  name: string;
  role?: string;
}

@Component({
  // Custom HTML tag name used to place this component inside another template
  // (e.g., <app-user-badge /> or <app-user-badge></app-user-badge>).
  selector: 'app-user-badge',

  // Standalone components declare their template dependencies right here.
  imports: [CurrencyPipe, UpperCasePipe],

  // Inline HTML template rendered whenever <app-user-badge> is on screen.
  template: `
    <div class="badge-card">
      <p>Hello, {{ username }}! Role: {{ role }}</p>
    </div>
    <section class="badge">
      <!-- 1. Basic syntax & signal/computed evaluation -->
      <h2>{{ greeting() }}</h2>

      <!-- 2. Nullish handling: optional chaining (?.) and nullish coalescing (??) -->
      <p>Member: {{ user()?.name ?? 'Guest User' }}</p>
      <p>Role: {{ user()?.role ?? 'Standard Member' }}</p>

      <!-- 3. Allowed expressions: arithmetic, ternary, pipes, and local template context -->
      <p>
        Balance: {{ balance() | currency:'INR' }}
        | Status: {{ balance() >= 0 ? 'Healthy' : 'Overdue' }}
      </p>
      <p>Next Milestone: {{ points() + 50 }} pts ({{ tierLabel() | uppercase }})</p>

      @for (tag of tags(); track tag) {
        <span class="tag">#{{ tag }}</span>
      }

      <!-- 4. Automatic HTML escaping (XSS protection) -->
      <p>Bio note: {{ untrustedBio() }}</p>
    </section>
  `,

  // Inline component-scoped CSS.
  styles: `
    .badge-card {
      padding: 0.75rem 1rem;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      background: #f8fafc;
      color: #0f172a;
      margin: 0.75rem 0;
    }
    .badge {
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 16px;
      max-width: 420px;
    }
    .tag {
      display: inline-block;
      margin-right: 8px;
      font-size: 0.85rem;
    }
  `
})
// Standalone by default (no @NgModule or `standalone: true` needed).
export class UserBadgeComponent {
  username = 'Aarav';
  role = 'Frontend Developer';
  user = signal<UserProfile | null>({ name: 'abhi' });
  points = signal<number>(120);
  balance = signal<number>(2450);
  tags = signal<string[]>(['angular', 'standalone']);
  untrustedBio = signal<string>('<script>alert("xss")</script><b>Frontend Dev</b>');

  greeting = computed(() => `Welcome back, ${this.user()?.name ?? 'Visitor'}!`);
  tierLabel = computed(() => (this.points() >= 100 ? 'Gold' : 'Silver'));
}
