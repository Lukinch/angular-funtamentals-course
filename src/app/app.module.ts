import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component/events-list.component';
import { EventThumbnailComponent } from './events/events-list.component/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './navbar/navbar.component';
import { EventService } from './events/services/events.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './events/error/404.component';
import { EventRouterActivator } from './events/event-details/event-route-activator.component';
import { EventListResolver } from './events/services/events-list-resolver.service';
import { UserModule } from './user/user.module';
import { AuthService } from './user/services/auth.service';

@NgModule({
  declarations: [
    CreateEventComponent,
    Error404Component,
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, UserModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [EventsAppComponent],
  providers: [
    AuthService,
    EventService,
    EventListResolver,
    EventRouterActivator,
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
