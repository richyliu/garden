import { Component } from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {Action} from '../models/action';
import {Observable} from 'rxjs';
import {NumberMap} from '../models/model-maps';
import {ActionType} from '../models/action-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'actions.component.html',
  styleUrls: ['actions.component.scss']
})
export class ActionsPage {

  public actions$: Observable<Action[]>;
  public actionTypes: NumberMap<string>;

  constructor(
    private db: DatabaseService
  ) {
    this.actions$ = this.db.getActions();
    this.actionTypes = ActionType;
  }

  clickedTest() {
    this.db.test();
  }
}
