import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../app.component';
import {CategoriesComponent} from '../categories.component';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  allMenuLinks;
  subLinks = [];
  statusCode;
  parLinks = [];
  bar;
  category;
  cats;
  catName;

  constructor(private appComp: AppComponent,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.getAllMenuLinks();

  }
  
  getAllMenuLinks() {
    const self = this;
    this.eventService.getAllMenuLinks()
      .subscribe(
        data => {
          this.allMenuLinks = data;
          this.allMenuLinks.forEach(function(link) {
            if (link.submenu == 'yes') {
              self.subLinks.push(link);
            } else {
              self.parLinks.push(link);
            }
          });
        },
        errorCode => this.statusCode = errorCode);


  }

}
