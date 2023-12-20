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

  get educations() {
    return this.resumeForm.get('educations') as FormArray;
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

  get certifications() {
    return this.resumeForm.get('certifications') as FormArray;
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

  get references() {
    return this.resumeForm.get('references') as FormArray;
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

  get skills() {
    return this.resumeForm.get('skills') as FormArray;
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
