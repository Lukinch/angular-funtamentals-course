import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { profileRoutes } from './user.routes';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(profileRoutes)],
  declarations: [LoginComponent, ProfileComponent],
})
export class UserModule {}