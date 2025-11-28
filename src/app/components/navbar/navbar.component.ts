import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="sticky top-0 z-50 w-full border-b border-neutral-200/50 bg-white/80 backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-950/80">
      <div class="container mx-auto flex h-16 items-center justify-between px-4">
        <div class="text-xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">Dashboard Pro</div>
        <ul class="flex gap-6">
          <li>
            <a routerLink="/" 
               routerLinkActive="text-neutral-900 font-semibold" 
               [routerLinkActiveOptions]="{exact: true}" 
               class="text-neutral-500 hover:text-neutral-900 transition-colors text-sm font-medium">
               Home
            </a>
          </li>
          <li>
            <a routerLink="/about" 
               routerLinkActive="text-neutral-900 font-semibold" 
               class="text-neutral-500 hover:text-neutral-900 transition-colors text-sm font-medium">
               About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {}


