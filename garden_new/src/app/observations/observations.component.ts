import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {NumberMap} from '../models/model-maps';
import {DatabaseService} from '../services/database.service';
import {ObservationType} from '../models/observation-type';
import {Observation} from '../models/observation';
import { ModalController } from '@ionic/angular';
import { AddObservPage } from '../add-observ/add-observ.page';

@Component({
  selector: 'app-about',
  templateUrl: 'observations.component.html',
  styleUrls: ['observations.component.scss']
})
export class ObservationsPage {

  public observs$: Observable<Observation[]>;
  public observTypes: NumberMap<string>;

  constructor(
    private db: DatabaseService,
    private modalCtrl: ModalController
  ) {
    this.observs$ = this.db.getObservations();
    this.observTypes = ObservationType;
  }

  public addObserv() {
    this.modalCtrl.create({
      component: AddObservPage
    }).then(m => m.present());
  }
}
