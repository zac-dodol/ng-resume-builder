import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  @Input() referencesFormArray!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get references() {
    return this.referencesFormArray.get('references') as FormArray;
  }

  addReferences() {
    console.log('ref');
    this.references.push(
      this.fb.group({
        name: ['', Validators.required],
        contact: [''],
      })
    );
  }

  removeReferences(index: number) {
    this.references.removeAt(index);
  }
}
