import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

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
  public async addProduct(data){
    const colRef = collection(this.firestore,'product')
    return await addDoc(colRef,data)
  }
  public async delProduct(pid){
    await deleteDoc(doc(this.firestore,"product",pid))
  }
}
