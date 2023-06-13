import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  firestore = inject(Firestore);

  public async getAllData() {
    const colRef = collection(this.firestore,'product')
    const snap = await getDocs(colRef);
    return snap.docs.map((doc)=>({
      ...doc.data(),
      id: doc.id,
    }))
  }
  }
