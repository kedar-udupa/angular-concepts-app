import { Component, OnInit,  Input, Output, EventEmitter, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges,DoCheck {

  artist : {
    name :string,
    album : string,
    year : 0
  };

  @Output() childRecievedData = new EventEmitter();
  @Input() person;
 
  constructor() {
    
   }

  ngOnInit() 
  {
    console.log("onchanges fires before onInit."); 
    console.log("It can be used to check value of @input variable before component Initilization."); 
  }

  ngDoCheck()
  {
    console.log("Do check implemented.");
    
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    if (changes.person && !changes.person.isFirstChange()) 
    {
      console.log("not first change");
    }

    for (let propName in changes) 
    {
      let change = changes[propName];
      if(change.isFirstChange()) 
      {
        //alert(`first change: ${propName}`);
        console.log(changes[propName].currentValue);
        this.artist = changes[propName].currentValue;
        this.childRecievedData.emit("child event fired")
      } 
      else 
      {
        console.log("NOT FIRST CHANGE");
      }
    }
  }

}
