import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-resume',
  templateUrl: './preview-resume.component.html',
  styleUrls: ['./preview-resume.component.scss'],
})
export class PreviewResumeComponent {
  resumeData: any;
  selectedTemplate: string = 'template1'; // Default template

  constructor(private route: ActivatedRoute) {
    // Retrieve data and selected template passed from the form component
    this.route.paramMap.subscribe((params) => {
      this.resumeData = JSON.parse(params.get('data') || '{}');
      this.selectedTemplate = params.get('template') || 'template1';
    });
  }
}
