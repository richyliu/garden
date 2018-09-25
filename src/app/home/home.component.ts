import { Component, OnInit } from '@angular/core';

import { OnsNavigator } from 'ngx-onsenui';

import { CatalogComponent } from '../catalog/catalog.component';


@Component({
  selector: 'ons-page[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navigator: OnsNavigator) { }

  ngOnInit() {
  }

  push() {
    this.navigator.element.pushPage(CatalogComponent, {
      data: {foo: 1234}
    });
  }
}
