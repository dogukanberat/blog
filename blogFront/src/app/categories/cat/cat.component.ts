import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {EventService} from '../../event.service';
import {CategoriesComponent} from '../categories.component';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  allEvents;
  oldEvent = [];
  statusCode;
  catElements = [];
  bar;
  category;
  cats;
  catName;

  constructor(private appComp: AppComponent,
              private catComp: CategoriesComponent,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.category = this.catComp.category;
    this.getAllEvents();

  }

  getCategoriesById(allEvents) {
    this.eventService.getAllCategorys().subscribe(category => {
      this.cats = category;
      const catId = this.category;
      const self = this;

      console.log(catId);
      this.cats.forEach(function(cat) {
        if (catId == cat.id) {

          self.catName = cat.category;
          console.log(cat.category);

          allEvents.forEach(function(value) {
            if (value.category == cat.category) {
              self.catElements.push(value);
            }
          });


        }
      });


    }, errorCode => this.statusCode = errorCode);


  }


  getAllEvents() {
    this.eventService.getAllEvents()
      .subscribe(
        data => {
          this.allEvents = data;
          this.getCategoriesById(this.allEvents);

        },
        errorCode => this.statusCode = errorCode);


  }

}
