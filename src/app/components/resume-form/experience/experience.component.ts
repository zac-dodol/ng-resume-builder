import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experienceFormArray!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get experiences() {
    return this.experienceFormArray.get('experiences') as FormArray;
  }

  addExperience() {
    console.log('exp');
    this.experiences.push(
      this.fb.group({
        title: ['', Validators.required],
        company: [''],
        location: [''],
        startDate: [''],
        endDate: [''],
        description: [''],
      })
    );
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }
}
