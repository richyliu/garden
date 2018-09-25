import { Component, OnInit } from '@angular/core';

import { OnsNavigator, Params } from 'ngx-onsenui';


@Component({
  selector: 'ons-page[catalog]',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  foo: number;

  constructor(
    private navigator: OnsNavigator,
    private params: Params
  ) {
    this.foo = params.data.foo;
  }

  ngOnInit() {
  }

}
