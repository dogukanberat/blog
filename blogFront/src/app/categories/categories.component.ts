import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.category = this.route.snapshot.queryParams.id;

    console.log('categori id : ' + this.category);
  }

}
