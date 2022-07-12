import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div>Test Works!</div>`,
  styles: [`div{
color:orange
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
