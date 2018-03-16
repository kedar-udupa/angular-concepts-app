import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  public uname : string;
  public uage : number;
  public uemail : string;
  public ucountry: string;
  public countries : Array<string> = ["India", "Sri Lanka", "China", "Singapore", "England"];

  submitted = false;

  modelDrivenFormData : FormGroup;

  constructor() 
  {

  }

  ngOnInit() 
  {
    this.modelDrivenFormData = new FormGroup(
      {
      department : new FormControl('', [Validators.required,
        Validators.minLength(4)]),
      password : new FormControl('', [Validators.required,
        Validators.minLength(8)]),
      contact : new FormControl('', [Validators.required,
        Validators.pattern('[789][0-9]{9}')])
      }
  );  }

  onSubmit()
  {
    this.submitted=true;
  }

  addUser()
  {
    console.log("create new object containing all form data...");
    
  }

}
