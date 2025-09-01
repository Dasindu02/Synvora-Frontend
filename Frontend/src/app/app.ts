import { Component, signal, effect } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Synvora');
  showHeaderFooter = signal(true);

  constructor(private router: Router) {
    // Watch for route changes
    effect(() => {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // Check if current route should hide header/footer
          const route = this.router.routerState.snapshot.root.firstChild;
          const shouldHide = route?.data?.['hideHeaderFooter'];
          this.showHeaderFooter.set(!shouldHide);
        }
      });
    }, { allowSignalWrites: true });
  }
}