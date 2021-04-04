import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pages;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pages = this.route.snapshot.queryParams.id;
  }

}
