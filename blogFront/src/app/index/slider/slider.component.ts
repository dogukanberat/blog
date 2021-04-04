import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageObject: Array<object> = [
    {
      url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
      caption: 'The first slide',
      href: '#config'
    },
    {
      url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg',
      clickAction: () => alert('custom click function')
    },
    {
      url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
      caption: 'Apple TV',
      href: 'https://www.apple.com/'
    }
  ];
  allSliders;
  statusCode;
  constructor(private appComp: AppComponent,
              private sliderService: EventService) { }

  ngOnInit(): void {
    this.getAllSliders();
  }

  getAllSliders() {
    this.sliderService.getAllSliders()
      .subscribe(
        data => this.allSliders = data,
        errorCode => this.statusCode = errorCode);


  }
}
