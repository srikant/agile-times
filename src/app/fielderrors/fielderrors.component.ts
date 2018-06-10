import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fielderrors',
  templateUrl: './fielderrors.component.html',
  styleUrls: ['./fielderrors.component.css']
})
export class FielderrorsComponent implements OnInit {

  @Input('form') form: FormGroup;
  @Input('fieldName') fieldName: string;
  @Input('nicename') nicename: string;
  constructor() { }

  ngOnInit() {
  }

  fieldErrors(field: string) {
    const controlState = this.form.controls[field];
    // console.log(controlState.errors);
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;
  }
}
