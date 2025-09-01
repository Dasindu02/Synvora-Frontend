import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.submitSuccess = true;
      
      // Reset form after success
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }
}