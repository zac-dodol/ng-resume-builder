import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
})
export class CertificationComponent {
  @Input() certificationFormArray!: FormGroup;

  constructor(private fb: FormBuilder) {}

  get certifications() {
    return this.certificationFormArray.get('certifications') as FormArray;
  }

  addCertification() {
    console.log('cert');
    this.certifications.push(
      this.fb.group({
        name: ['', Validators.required],
        date: [''],
      })
    );
  }

  removeCertification(index: number) {
    this.certifications.removeAt(index);
  }
}
