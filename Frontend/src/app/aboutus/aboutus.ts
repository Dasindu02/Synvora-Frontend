// aboutus.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './aboutus.html',
  styleUrls: ['./aboutus.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Aboutus implements OnInit {
  profileImagePath = 'assets/profilepic.jpg';
  imageLoaded = false;
  
  teamMembers = [
    { emoji: '👨‍💻', name: 'Dasindu Dinsara', role: 'Software Engineer' },
    { emoji: '👩‍🎨', name: 'Jane Doe', role: 'UI/UX Designer' },
    { emoji: '📈', name: 'John Smith', role: 'Business Analyst' }
  ];

  stats = [
    { value: 150, label: 'Projects Completed' },
    { value: 50, label: 'Happy Clients' },
    { value: 10, label: 'Years Experience' },
    { value: 24, label: 'Team Members' }
  ];

  countUpOptions = {
    duration: 2,
    separator: ',',
    decimal: '.',
    enableScrollSpy: true
  };

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }
}