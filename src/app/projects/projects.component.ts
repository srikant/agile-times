import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterContentInit {

  projectForm: FormGroup;

  minProjectDate = new Date();

  allDevs = [

    { label: 'Jill', value: 'Jill Cool' },
    { label: 'Joe', value: 'Joe Cool' },
    { label: 'Mary', value: 'Mary Cool' },
    { label: 'Susan', value: 'Susan Jones' },
    { label: 'Phil', value: 'Phil Stephens' },
    { label: 'Karen', value: 'Karen Phillips' },
    { label: 'Chris', value: 'Chris Hampton' },
    { label: 'Si', value: 'Si Chew' },
    { label: 'Terri', value: 'Terri Smith' }

  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectId: ['', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7)]],
      description: ['My cool project', [
        Validators.required,
        Validators.maxLength(140)]],
      startDate: [ new Date(), Validators.required],
      projectType: ['B'],
      selectedDevs: [[]], // ['']
      rating: [3]
    });
  }

  ngAfterContentInit() {

  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }


  fieldErrors(field: string) {
    const controlState = this.projectForm.controls[field];
    // console.log(controlState.errors);
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;
  }

  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }

}
