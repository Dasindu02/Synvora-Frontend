import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Required for *ngIf and other common directives
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private router: Router) {}

  // Method to navigate to applicationhome
  navigateToApplicationHome() {
    this.router.navigate(['/applicationhome']);
  }
}