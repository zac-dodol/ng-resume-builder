import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss'],
})
export class ResumeFormComponent {
  resumeData: any = {};

  constructor(private router: Router) {}

  submitForm() {
    // Add any additional form submission logic here
    this.router.navigate([
      '/preview-resume',
      { data: JSON.stringify(this.resumeData) },
    ]);
  }
}
