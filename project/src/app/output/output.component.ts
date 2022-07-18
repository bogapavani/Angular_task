import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import '../app/app.component.scss'

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() public buttonprimary: any;
  @Input() public buttonSecondary:any;
  @Input () public primary:any;
  @Output() public childEvent = new EventEmitter();
  hide=true;
  // show=false;
  constructor() { }


  ngOnInit(): void {
  }

  fireEvent1() {
    // this.show=true;
    this.hide=false;
    this.childEvent.emit("Clicked by user 1");
  }
  fireEvent2() {
    this.hide=true;
    // this.show=false;
    this.childEvent.emit("Clicked by user 2")
  }

}
