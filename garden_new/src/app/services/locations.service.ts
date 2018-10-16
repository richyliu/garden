import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, tap} from 'rxjs/operators';
import {Location} from '../models/location';
import {Observable} from 'rxjs';
import {LocationMap} from '../models/location-map';
import { DateTime } from 'luxon';
import {LocationPoint} from '../models/location-point';
import {Action} from '../models/action';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private fs: AngularFirestore
  ) { }

  public test() {
    console.log('running Locations.test()...');
    // this.fs.collection('location-points').valueChanges().subscribe(values => {
    //   console.log(values);
    //   // @ts-ignore
    //   console.log(values[0].location);
    //   // @ts-ignore
    //   this.fs.doc(values[0].location.path).valueChanges().subscribe(d => console.log(d));
    // });

    this.getLocationPoints().subscribe(console.log);
    this.getActions().subscribe(console.log);

    // this.getLocations().subscribe(a => console.log(a));
  }

  public getLocations(): Observable<LocationMap> {
    return this.fs.collection<LocationMap>('locations').snapshotChanges()
      .pipe(
        // convert locations array to location dictionary (with key of documentId)
        map(loc => loc.reduce((obj, l) => {
            obj[l.payload.doc.id] = l.payload.doc.data();
            return obj;
          }, {})
        )
      );
  }

  public addLocation(loc: Location) {
    this.fs.collection('locations').add(loc);
  }

  public getLocationPoints(): Observable<LocationPoint[]> {
    return this.getCol<LocationPoint>('location-points');
  }

  public getActions(): Observable<Action[]> {
    return this.getCol<Action>('actions');
  }

  public getCol<T>(name: string): Observable<T[]> {
    return this.fs.collection<T>(name).valueChanges().pipe(
      tap(a => console.log(name, a))
    );
  }
}
