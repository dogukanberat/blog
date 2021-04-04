import { Component, OnInit } from '@angular/core';
import {EventService} from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blobfish';
  allEvents;
  statusCode;

  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe(
        data => this.allEvents = data,
        errorCode => this.statusCode = errorCode);


  }

}
