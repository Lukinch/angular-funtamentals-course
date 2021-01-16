import { Component, Input } from '@angular/core';
import { IEvent } from '../../models/event-interface';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
}
