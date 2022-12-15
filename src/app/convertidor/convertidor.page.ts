import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../mindicador/getapi.service';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.page.html',
  styleUrls: ['./convertidor.page.scss'],
})
export class ConvertidorPage implements OnInit {
getdata:any []=[];
  constructor( public _services: GetapiService) {

    this._services.getdata<any[]>("").subscribe(data => {
      this.getdata = data
      console.log(this.getdata)
    }
    )
   }

  ngOnInit() {
  }

}
