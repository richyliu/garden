import { Component } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {DataInitService} from '../services/data-init.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    private locDb: LocationsService,
    private dataInit: DataInitService
  ) {}

  clickedTest() {
    this.locDb.test();
  }

  runDataInit() {
    this.dataInit.run();
  }
}
