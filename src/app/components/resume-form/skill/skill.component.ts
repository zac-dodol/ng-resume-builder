import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() skillFormArray!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get skills() {
    return this.skillFormArray.get('skills') as FormArray;
  }

  addSkills() {
    console.log('skill');
    this.skills.push(
      this.fb.group({
        name: ['', Validators.required],
        score: [''],
      })
    );
  }

  removeSkills(index: number) {
    this.skills.removeAt(index);
  }
}
