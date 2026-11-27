import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-submit-box',
  template: `
    <img [src]="logoUrl()" alt="App Logo" />

    <button type="button" [disabled]="isDisabled()">
      Submit Form
    </button>

    <button type="button" (click)="toggleDisabled()">
      {{ isDisabled() ? 'Enable Button' : 'Disable Button' }}
    </button>
  `
})
export class SubmitBoxComponent {
  logoUrl = signal('/assets/logo.png');
  isDisabled = signal(true);

  toggleDisabled(): void {
    this.isDisabled.update((current) => !current);
  }
}
