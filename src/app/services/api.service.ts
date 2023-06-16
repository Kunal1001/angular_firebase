import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';

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
  public async getProduct(pid){
    const colRef = collection(this.firestore,'product')
    const docRef = doc(colRef, pid)
    const snap = await getDoc(docRef)
    return{
      ...snap.data(),
      id:snap.id
    }
  }
  public async updateProduct(data,pid){
    const colRef = collection(this.firestore,'product')
    const docRef = doc(colRef, pid)
    return await updateDoc(docRef,data)
  }
}
