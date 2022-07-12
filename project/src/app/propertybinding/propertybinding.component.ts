import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  
  <input type="text" value="pavani">
  <input [id]="myId" type="text" value="pavani">
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="pavani">`,
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent implements OnInit {
  public myId = "test";
  public isDisabled=true
  constructor() { }

  ngOnInit(): void {
  }

}
