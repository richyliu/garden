import { Component, Injectable } from '@angular/core';

import { OnsNavigator } from 'ngx-onsenui';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private navigator: OnsNavigator) { }

  public goto(page: any, options: object): void {
    this.navigator.element.pushPage(page, options);
  }
}
