import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  constructor(public storae: Storage) {
    console.log('Hello Data Provider');
  }

  getData() {
    return this.storae.get('todos');
  }

  save(data) {
    let newData = JSON.stringify(data);
    this.storae.set('todos', newData);
  }
}
