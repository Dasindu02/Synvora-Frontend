import { Routes } from '@angular/router';
import { Signup} from './signup/signup';
import { Home } from './home/home';
import { Applicationhome } from './applicationhome/applicationhome';

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
    { 
    path: 'applicationhome', 
    component: Applicationhome,
    title: 'Synvora',
    data: { hideHeaderFooter: true }  
  },


  // Add other routes as needed
];