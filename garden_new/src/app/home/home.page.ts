import { Component } from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {Action} from '../models/action';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public actions$: Observable<Action[]>;

  constructor(
    private db: DatabaseService
  ) {
    this.actions$ = this.db.getActions();
  }

  clickedTest() {
    this.db.test();
  }
}
