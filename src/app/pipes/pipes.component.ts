import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  multiplicant : number  = 4;
  multiplier : number = 3

  constructor() { }

  ngOnInit() {
  }

}
