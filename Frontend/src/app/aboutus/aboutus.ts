import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aboutus.html',
  styleUrls: ['./aboutus.scss']
})
export class Aboutus implements OnInit, OnDestroy {
  imageLoaded = false;
  imageError = false;
  
  heroImages = [
    'assets/1603896970-fea.webp',
    'assets/new02.jpg', 
    'assets/new04.jpg',
    'assets/new05.jpg', 
 

  ];
  currentImageIndex = 0;
  slideshowInterval: any;
  slideshowActive = true;
  slideshowIntervalTime = 3500; 

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
      avatar: 'assets/profilepic01.jpg',
      name: 'Dasindu Dinsara', 
      role: 'Founder & Lead Developer | Software Engineer',
      bio: 'Financial tech enthusiast with 5+ years building budgeting tools'
    },
    { 
      avatar: 'assets/example01.jpg',
      name: 'Seraphina Eleanor', 
      role: 'UX Designer',
      bio: 'Specializes in making complex financial data intuitive'
    },
    { 
      avatar: 'assets/example03.jpeg',
      name: 'Chamath Palihapitiya', 
      role: 'Financial Advisor',
      bio: 'Certified financial planner ensuring sound money principles'
    }
  ];

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    this.stopSlideshow();
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }

  onImageError(event: Event): void {
    this.imageError = true;
    const img = event.target as HTMLImageElement;
    img.src = 'assets/placeholder.jpg';
  }

  // Slideshow methods
  startSlideshow(): void {
    this.slideshowActive = true;
    this.slideshowInterval = setInterval(() => {
      this.nextImage();
    }, this.slideshowIntervalTime);
  }

  stopSlideshow(): void {
    this.slideshowActive = false;
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
    }
  }

  toggleSlideshow(): void {
    if (this.slideshowActive) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  }

  nextImage(): void {
    this.imageLoaded = false;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
  }

  prevImage(): void {
    this.imageLoaded = false;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.heroImages.length) % this.heroImages.length;
  }

  goToImage(index: number): void {
    this.imageLoaded = false;
    this.currentImageIndex = index;
    
    // Reset the slideshow timer when manually selecting an image
    if (this.slideshowActive) {
      this.stopSlideshow();
      this.startSlideshow();
    }
  }

  pauseOnHover(): void {
    if (this.slideshowActive) {
      this.stopSlideshow();
    }
  }

  resumeOnLeave(): void {
    if (!this.slideshowActive) {
      this.startSlideshow();
    }
  }
}