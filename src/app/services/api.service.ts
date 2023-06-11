import { Injectable, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firestore: Firestore = inject(Firestore);
  constructor() { }

  public getProducts(){
    const itemCollection = collection(this.firestore, 'items');
  }
}
