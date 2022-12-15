
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from '../services/firestore.service';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre:string;
  apellido:string;
  perfil:string;
  correo:string;
  contrasena:string;

  
  constructor(private authSvc: AuthService, private router: Router, private AngularFireStore: AngularFirestore) {}

  ngOnInit() {}

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }
  async addRegistro(){
    const Id = this.AngularFireStore.createId();
    console.log(this.nombre)
    this.AngularFireStore.collection('users').doc(Id).set({
   
      "nombre": this.nombre,
      "apellido": this.apellido,
      "perfil" : this.perfil,
      "correo":this.correo,
      "contrasena":this.contrasena

  
    });
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
  }

