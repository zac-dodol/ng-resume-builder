import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-resume',
  templateUrl: './preview-resume.component.html',
  styleUrls: ['./preview-resume.component.scss'],
})
export class PreviewResumeComponent implements OnInit {
  resumeData: any;
  selectedTemplate: string = 'template1'; // Default template

  constructor(private route: ActivatedRoute) {
    // Retrieve data and selected template from queryParams
    this.route.queryParams.subscribe((params) => {
      this.resumeData = JSON.parse(params['data'] || '{}');
      this.selectedTemplate = params['template'] || 'template1';
    });
  }

  ngOnInit(): void {
    console.log(this.resumeData);
  }
}
