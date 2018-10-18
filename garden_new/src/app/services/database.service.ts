import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, tap} from 'rxjs/operators';
import {Location} from '../models/location';
import {Observable, of} from 'rxjs';
import {LocationMap, LocationPointMap, PlantMap, StringMap} from '../models/model-maps';
import { DateTime } from 'luxon';
import {LocationPoint} from '../models/location-point';
import {Action} from '../models/action';
import {Plant} from '../models/plant';
import {Observation} from '../models/observation';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private locations: LocationMap;
  private locationPoints: LocationPointMap;
  private plants: PlantMap;

  constructor(
    private fs: AngularFirestore
  ) { }

  public test() {
    console.log('running Locations.test()...');
    this.getActions().subscribe(console.log);
  }



  public getLocationMap(): Observable<LocationMap> {
    if (this.locations) {
      return of(this.locations);
    } else {
      return this.getColMap<Location>('locations') as Observable<LocationMap>;
    }
  }

  public getLocations(): Observable<Location[]> {
    return this.getCol<Location>('locations');
  }

  public addLocation(loc: Location) {
    this.fs.collection('locations').add(loc);
  }


  public getLocationPointMap(): Observable<LocationPointMap> {
    if (this.locationPoints) {
      return of(this.locationPoints);
    } else {
      return this.getColMap('location-points') as Observable<LocationPointMap>;
    }
  }

  public getLocationPoints(): Observable<LocationPoint[]> {
    return this.getCol<LocationPoint>('location-points');
  }

  public addLocationPoint(lp: LocationPoint) {
    this.fs.collection('location-points').add(lp);
  }


  public getActions(): Observable<Action[]> {
    return this.getCol<Action>('actions');
  }

  public addAction(ac: Action) {
    this.fs.collection('actions').add(ac);
  }


  public getObservations(): Observable<Observation[]> {
    return this.getCol<Observation>('observations');
  }

  public addObservation(ob: Observation) {
    this.fs.collection('observations').add(ob);
  }


  public getPlantMap(): Observable<PlantMap> {
    if (this.plants) {
      return of(this.plants);
    } else {
      return this.getColMap<Plant>('plants');
    }
  }

  public getPlants(): Observable<Plant[]> {
    return this.getCol<Plant>('plants');
  }

  public addPlant(plant: Plant) {
    this.fs.collection('plants').add(plant);
  }



  private getColMap<T>(name: string): Observable<StringMap<T>> {
    return this.fs.collection<StringMap<T>>(name).snapshotChanges()
      .pipe(
        // convert array to  dictionary (with key of documentId)
        map(arr => arr.reduce((obj, a) => {
            obj[a.payload.doc.id] = a.payload.doc.data();
            return obj;
          }, {})
        )
      );
  }

  private getCol<T>(name: string): Observable<T[]> {
    return this.fs.collection<T>(name).valueChanges().pipe(
      tap(a => console.log(name, a))
    );
  }
}
