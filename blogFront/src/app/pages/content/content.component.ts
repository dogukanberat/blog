import { Component, OnInit } from '@angular/core';
import {PagesComponent} from '../../pages/pages.component';
import {DomSanitizer} from '@angular/platform-browser';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-pages-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class PagesContentComponent implements OnInit {
  pages;
  cardContent;
  iframe = true;
  page;
  iframeUrl;
  descR;
  statusCode;
  constructor(
    private pagesComp: PagesComponent,
    private sanitizer: DomSanitizer,
    private eventService: EventService
  ) {
  }



  ngOnInit() {
    this.pages = this.pagesComp.pages;
    this.getEventById(this.pages);
  }

  getEventById(eventId) {
    this.eventService.getPageById(eventId)
      .subscribe(pages => {
          this.page = pages;
          document.getElementById("descR").innerHTML = this.page.descR;


        },
        errorCode => this.statusCode = errorCode);
  }

}
