import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent implements OnInit {
  resumeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.resumeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')],
      address: [''],
      description: [''],
      linkedin: [''],
      experiences: this.fb.array([]),
      educations: this.fb.array([]),
      certifications: this.fb.array([]),
      references: this.fb.array([]),
      skills: this.fb.array([]),
    });
  }

  get experiences() {
    return this.resumeForm.get('experiences') as FormArray;
  }

  get educations() {
    return this.resumeForm.get('educations') as FormArray;
  }

  get certifications() {
    return this.resumeForm.get('certifications') as FormArray;
  }

  get references() {
    return this.resumeForm.get('references') as FormArray;
  }

  get skills() {
    return this.resumeForm.get('skills') as FormArray;
  }

  submitForm() {
    console.log('Form values:', this.resumeForm.value);

    // Add any additional form submission logic here
    this.router.navigate(['/preview-resume'], {
      queryParams: {
        data: JSON.stringify(this.resumeForm.value),
        template: 'template1', // Adjust the template value as needed
      },
    });
  }
}
