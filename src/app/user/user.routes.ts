import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const profileRoutes = [
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
