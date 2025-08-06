import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aboutus.html',
  styleUrls: ['./aboutus.scss']
})
export class Aboutus {
  imageLoaded = false;
  
  coreValues = [
    { 
      emoji: '🔍', 
      title: 'Transparency', 
      description: 'We believe financial clarity builds trust in relationships.' 
    },
    { 
      emoji: '🤝', 
      title: 'Collaboration', 
      description: 'Money management should be a team effort, not a solo struggle.' 
    },
    { 
      emoji: '🛡️', 
      title: 'Security', 
      description: 'Your financial data is protected with enterprise-grade encryption.' 
    },
    { 
      emoji: '💎', 
      title: 'Simplicity', 
      description: 'Complex financial tracking made beautifully simple.' 
    }
  ];

  features = [
    {
      emoji: '👥',
      title: 'Dual Mode',
      description: 'Track shared expenses while maintaining personal spending privacy.'
    },
    {
      emoji: '📊',
      title: 'Smart Analytics',
      description: 'Visual reports help you understand spending patterns at a glance.'
    },
    {
      emoji: '💸',
      title: 'Loan Management',
      description: 'Track and split loan payments with your partner effortlessly.'
    },
    {
      emoji: '📱',
      title: 'Anywhere Access',
      description: 'Access your budget from any device, anytime.'
    }
  ];

  teamMembers = [
    { 
      avatar: 'assets/profilepic.jpg',
      name: 'Dasindu Dinsara', 
      role: 'Founder & Lead Developer',
      bio: 'Financial tech enthusiast with 5+ years building budgeting tools'
    },
    { 
      avatar: 'assets/team/jane.jpg',
      name: 'Jane Smith', 
      role: 'UX Designer',
      bio: 'Specializes in making complex financial data intuitive'
    },
    { 
      avatar: 'assets/team/alex.jpg',
      name: 'Alex Johnson', 
      role: 'Financial Advisor',
      bio: 'Certified financial planner ensuring sound money principles'
    }
  ];

  onImageLoad(): void {
    this.imageLoaded = true;
  }
}