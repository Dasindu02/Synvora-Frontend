import { Routes } from '@angular/router';
import { Signup} from './signup/signup';
import { Home } from './home/home';
import { Applicationhome } from './applicationhome/applicationhome';
import { Aboutus } from './aboutus/aboutus';  
import { Contact } from './contact/contact'; 

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
  {
    path: 'aboutus',
    component: Aboutus,
    title: 'Synvora'
  },
  {
    path: 'contact',
    component: Contact,
    title: ' Synvora'
  },


  // Add other routes as needed
];