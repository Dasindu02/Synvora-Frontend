import { Routes } from '@angular/router';
import { Signup } from './signup/signup';

export const routes: Routes = [
  { 
    path: 'signup', 
    component: Signup,
    title: 'Synvora' 
  },
  { 
    path: '', 
    redirectTo: 'signup', 
    pathMatch: 'full' 
  },
 
];