import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  template: `
  <h2>{{parentData}}</h2>
  <button (click)="fireEvent()">Send </button>
  <input type="text" value="pavani">
  <input [id]="myId" type="text" value="pavani">
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="pavani">`,
  styleUrls: ['./propertybinding.component.scss']
})
export class PropertybindingComponent implements OnInit {
  public myId = "test";
  public isDisabled = true
  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  
  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit("hey codevolution");
  }

}


