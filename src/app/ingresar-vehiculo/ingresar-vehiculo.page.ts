import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.page.html',
  styleUrls: ['./ingresar-vehiculo.page.scss'],
})
export class IngresarVehiculoPage implements OnInit {
  nombreConductor: string;
  modeloVehiculo: string;
  capacidadPasajeros: string;
  rutaTomada:String;
  tarifa:String;


  constructor(
    private AngularFireStore: AngularFirestore
  ) { }


  ngOnInit() {
  }

  async addVehiculo(){
    const IdVehiculo = this.AngularFireStore.createId();
    console.log(this.nombreConductor)
    this.AngularFireStore.collection('vehiculo').doc(IdVehiculo).set({
      'id':IdVehiculo,
      'nombreConductor':this.nombreConductor,
      'modeloVehiculo' : this.modeloVehiculo,
      'capacidadPasajeros': this.capacidadPasajeros,
      'rutaTomada': this.rutaTomada,
      'tarifa': this.tarifa
    });

  }
}
