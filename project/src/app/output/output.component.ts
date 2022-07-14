import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import '../app/app.component.scss'

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() public buttonprimary1: any;
  @Input() public buttonSecondary:any;
  @Output() public childEvent = new EventEmitter();
  constructor() { }


  ngOnInit(): void {
  }

  fireEvent1() {
    this.childEvent.emit("Clicked by user 1");
  }
  fireEvent2() {
    this.childEvent.emit("Clicked by user 2")
  }

}
