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
  resumeData: any = {};

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
      experiences: this.fb.array([]),
      education: this.fb.array([]),
      certifications: this.fb.array([]),
      description: [''],
      references: this.fb.array([]),
      linkedin: [''],
      skills: this.fb.array([]),
    });
  }

  get experiences() {
    return this.resumeForm.get('experiences') as FormArray;
  }

  get education() {
    return this.resumeForm.get('education') as FormArray;
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

  addExperience() {
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

  // Add similar functions for education, certifications, references, and skills

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
