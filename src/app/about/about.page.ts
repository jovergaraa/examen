import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  valueSelected:string = "1"
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event: CustomEvent){
    this.valueSelected = event.detail.value;
    console.log(this.valueSelected);
  }

}
