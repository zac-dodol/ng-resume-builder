import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { StepService } from 'src/app/service/step.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent implements OnInit {
  resumeForm!: FormGroup;
  firstStepIndex = 0;
  maxStepIndex = 5;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public stepService: StepService
  ) {}

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

  // Function to navigate to the next step
  nextStep() {
    const currentStep = this.stepService.getCurrentStep();
    this.stepService.setCurrentStep(currentStep + 1);
  }

  // Function to navigate to the previous step
  prevStep() {
    const currentStep = this.stepService.getCurrentStep();
    this.stepService.setCurrentStep(Math.max(0, currentStep - 1));
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
