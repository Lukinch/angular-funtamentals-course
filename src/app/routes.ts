import { Routes } from '@angular/router';
import { Error404Component } from './events/error/404.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventRouterActivator } from './events/event-details/event-route-activator.component';
import { EventListResolver } from './events/services/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {
      events: EventListResolver,
    },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouterActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
