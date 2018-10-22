import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ModalController } from '@ionic/angular';
import { ObservationType } from '../models/observation-type';

@Component({
  selector: 'app-add-observ',
  templateUrl: './add-observ.page.html',
  styleUrls: ['./add-observ.page.scss'],
})
export class AddObservPage implements OnInit {

  public observTypes: string[];
  public type: string;
  public description: string;

  constructor(
    private db: DatabaseService,
    private modalCtr: ModalController
  ) {
    this.observTypes = Object.keys(ObservationType).filter(a => isNaN(Number(a)));
  }

  ngOnInit() {
  }

  public add() {
    console.log(this.type);
    console.log(this.description);
    this.dismiss();
  }

  public dismiss() {
    this.modalCtr.dismiss();
  }

}
