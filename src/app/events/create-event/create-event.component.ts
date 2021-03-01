import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../models/event-interface';
import { EventService } from '../services/events.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  event;
  newEvent: IEvent;
  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
