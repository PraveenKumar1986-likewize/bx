import { Component, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  imports: [ReactiveFormsModule],
  templateUrl: './lead-form.html',
  styleUrl: './lead-form.scss',
})
export class LeadForm {
  title = input<string>('Get a Detailed Cost Report');
  subtitle = input<string>('Share your number — our team will send a personalized PDF estimate within 24 hours.');
  ctaLabel = input<string>('Get Free Quote');

  protected readonly submitted = signal(false);
  protected readonly submitting = signal(false);

  private readonly fb = new FormBuilder();

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
    city: [''],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    // Simulated network call — replace with real lead-capture API integration.
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 700);
  }
}
