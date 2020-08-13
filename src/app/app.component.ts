import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public name = 'Angular';
  public form: FormGroup;
        
  constructor() {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
      image: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    console.log('->', this.form.value)
  }
}
