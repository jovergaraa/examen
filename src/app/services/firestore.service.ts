import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc,updateDoc, deleteDoc } from '@angular/fire/firestore';
import { User } from './user';
import { Observable } from 'rxjs';
import { vehiculo } from '../models/models';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getUser():Observable<User[]>{
    const UserRef = collection(this.firestore,'users');
    return collectionData(UserRef, {idField: 'id'}) as Observable<User[]>;
  }

  getUserById(id:string): Observable<User>{
    const userRef = doc(this.firestore,`users/${id}`);
    return docData(userRef, {idField:'id'}) as Observable<User>;
  }

  addUser(user:User){
    const userRef = collection(this.firestore,'users');
    return addDoc(userRef, user);
  }

  updateUser(user:User){
    const userRef = doc(this.firestore, `users/${user.id}`);
    return updateDoc(userRef,{
      nombre:user.nombre,
      apellido:user.apellido,
      perfil:user.perfil,
      image:user.image,
    });
  }

  deleteUser(user:User){
    const userRef = doc(this.firestore,`users/${user.id}`);
    return deleteDoc(userRef);
  }
  addVehiculo(vehiculo:vehiculo){
    const vehiculoRef = collection(this.firestore,'vehiculo');
    return addDoc(vehiculoRef, vehiculo);
  }
}
