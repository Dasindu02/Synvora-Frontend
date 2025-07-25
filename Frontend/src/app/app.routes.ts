import { Routes } from '@angular/router';
import { Signup} from './signup/signup';
import { Home } from './home/home';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,  
    title: 'Synvora '
  },
  { 
    path: 'signup', 
    component: Signup,
    title: 'Synvora' 
  },
  // Add other routes as needed
];