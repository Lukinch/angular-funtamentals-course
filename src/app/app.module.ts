import { appRoutes } from './routes';
import { AuthService } from './user/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { Error404Component } from './events/error/404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListResolver } from './events/services/events-list-resolver.service';
import { EventRouterActivator } from './events/event-details/event-route-activator.component';
import { EventsAppComponent } from './events-app.component';
import { EventService } from './events/services/events.service';
import { EventsListComponent } from './events/events-list.component/events-list.component';
import { EventThumbnailComponent } from './events/events-list.component/event-thumbnail/event-thumbnail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    CreateEventComponent,
    CreateSessionComponent,
    Error404Component,
    EventDetailsComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    AuthService,
    EventListResolver,
    EventRouterActivator,
    EventService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved your progress, do you really want to cancel?'
    );
  }
  return true;
}
