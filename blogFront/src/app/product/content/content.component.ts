import {Component, OnInit} from '@angular/core';
import {ProductComponent} from './../product.component';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-product-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ProductContentComponent implements OnInit {
  product;
  cardContent;
  iframe = true;
  event;
  iframeUrl;
  descR;
  statusCode;

  constructor(
    private productComp: ProductComponent,
    private sanitizer: DomSanitizer,
    private eventService: EventService
  ) {
  }


  ngOnInit() {
    this.product = this.productComp.product;
    this.getEventById(this.product);
  }

  getEventById(eventId) {
    this.eventService.getEventById(eventId)
      .subscribe(event => {
          this.event = event;
          document.getElementById('descR').innerHTML = this.event.descR;
          document.getElementById('descRDJ').innerHTML = this.event.descRDJ;
          // tslint:disable-next-line:no-unused-expression
          document.getElementById('iframe').setAttribute('src', this.event.iframeLink);


        },
        errorCode => this.statusCode = errorCode);
  }

}
