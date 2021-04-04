import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this.route.snapshot.queryParams.id;
  }

}
