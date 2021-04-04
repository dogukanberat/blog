import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {EventService} from '../../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  allEvents;
  allCategorys;
  statusCode;
  createEvent = false;
  data;
  datas;
  requestProcessing = false;
  eventIdToUpdate = null;
  processValidation = false;
  eventForm = new FormGroup({
    title: new FormControl('', Validators.required),
    email: new FormControl(''),
    category: new FormControl('', Validators.required),
    iframeLink: new FormControl('', Validators.required),
    descR: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    descRDJ: new FormControl('', Validators.required),

  });

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.getAllEvents();
    this.getAllCategorys();
  }

  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe(
        data => {
          this.allEvents = data;
        },
        errorCode => this.statusCode = errorCode);

  }

  openCreateEvent() {
    if (this.createEvent === false) {
      this.createEvent = true;
      this.backToCreateEvent();
    } else {
      this.createEvent = false;
      this.backToCreateEvent();

    }
  }

  getAllCategorys() {
    this.eventService.getAllCategorys()
      .subscribe(
        data => this.allCategorys = data,
        errorCode => this.statusCode = errorCode);
  }

  onEventFormSubmit() {
    this.processValidation = true;
    if (this.eventForm.invalid) {
      return;
    }
    this.preProcessConfigurations();
    const event = this.eventForm.value;


    if (this.eventIdToUpdate === null) {
      this.eventService.getAllEvents()
        .subscribe(events => {
          this.data = events;
          this.eventService.createEvent(event)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.getAllEvents();
                this.backToCreateEvent();
              },
              errorCode => this.statusCode = errorCode
            );
        });
    } else {
      event.id = this.eventIdToUpdate;
      this.eventService.updateEvent(event)
        .subscribe(successCode => {
            this.statusCode = successCode;
            this.getAllEvents();
            this.backToCreateEvent();
          },
          errorCode => this.statusCode = errorCode);
    }
  }

  loadEventToEdit(eventId) {
    this.createEvent = true;
    this.preProcessConfigurations();
    this.eventService.getEventById(eventId)
      .subscribe(event => {
          this.datas = event;
          this.eventIdToUpdate = this.datas.id;
          this.eventForm.setValue({
            title: this.datas.title, category: this.datas.category, iframeLink: this.datas.iframeLink,
            descR: this.datas.descR, image: this.datas.image, descRDJ: this.datas.descRDJ, email: this.datas.email
          });
          this.processValidation = true;
          this.requestProcessing = false;
        },
        errorCode => this.statusCode = errorCode);
  }


  deleteEvent(eventId: string) {
    this.preProcessConfigurations();
    this.eventService.deleteEventById(eventId)
      .subscribe(successCode => {
          this.statusCode = 204;
          this.getAllEvents();
          this.backToCreateEvent();
        },
        errorCode => this.statusCode = errorCode);
  }

  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  backToCreateEvent() {
    this.eventIdToUpdate = null;
    this.eventForm.reset();
    this.processValidation = false;
  }
}
