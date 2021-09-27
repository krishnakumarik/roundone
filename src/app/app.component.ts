import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'roundone';
  value = "";
  name = "";

  colors = [
    { key: "green", value: 1 },
    { key: "red", value: 1 },
    { key: "yellow", value: 1 },
    { key: "black", value: 1 },
    { key: "white", value: 1 }
  ]
  colorValue = ""
  constructor(){
    
  }
  delete = () => {
    this.colors.find(x => {
      if (x.key == this.colorValue) {
        x.value = 0;
      }
    });
    this.colors= this.colors.filter(x=>x.value == 1)

  }



}
