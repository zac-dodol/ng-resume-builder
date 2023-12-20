import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() educationFormArray!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get educations() {
    return this.educationFormArray.get('educations') as FormArray;
  }

  addEducation() {
    console.log('edu');
    this.educations.push(
      this.fb.group({
        degree: ['', Validators.required],
        major: [''],
        university: [''],
        location: [''],
        startDate: [''],
        endDate: [''],
        description: [''],
      })
    );
  }

  removeEducation(index: number) {
    this.educations.removeAt(index);
  }
}
