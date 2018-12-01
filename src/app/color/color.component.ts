import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
    background = 'green'
  constructor() { }

  ngOnInit() {
  }
  onChange(value) {
      this.background = value ;
  }
}
