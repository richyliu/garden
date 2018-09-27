import { Component, OnInit } from '@angular/core';

import { CatalogComponent } from '../catalog/catalog.component';
import { NavigatorService } from '../services/navigator.service';


@Component({
  selector: 'ons-page[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nav: NavigatorService) { }

  ngOnInit() {
    console.log(typeof CatalogComponent);
  }

  push() {
    this.nav.goto(CatalogComponent, {
      data: {foo: 1234}
    });
  }
}
