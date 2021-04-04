import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  allEvents;
  oldEvent = [];
  statusCode;
  activeEvents = [];
bar;
  constructor(private appComp: AppComponent,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe(
        data => {
          const self = this;
          this.allEvents = data;

          this.allEvents.forEach(function(value) {
            if (value.category !== 'Gecmis') {
              self.activeEvents.push(value);
            }
          });
          // tslint:disable-next-line:only-arrow-functions
          this.allEvents.forEach(function(value) {
            if (value.category === 'Gecmis') {
              self.oldEvent.push(value);
              self.bar = true;
            }
          });

        },
        errorCode => this.statusCode = errorCode);


  }

}
