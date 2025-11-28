import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZardCardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ZardCardComponent,
  ],
  template: `
    <div class="container mx-auto p-8 flex justify-center items-center min-h-[80vh]">
      <z-card class="w-full max-w-lg shadow-xl border-neutral-200 dark:border-neutral-800"
              zTitle="About Page">
        <p class="text-neutral-600 dark:text-neutral-400">
          This application demonstrates the power of Angular combined with Zardui for creating a simple interface.
        </p>
      </z-card>
    </div>
  `,
  styles: []
})
export class AboutComponent {}



