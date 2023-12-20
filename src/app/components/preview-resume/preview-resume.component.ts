import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeDataService } from 'src/app/service/resume-data.service';

@Component({
  selector: 'app-preview-resume',
  templateUrl: './preview-resume.component.html',
  styleUrls: ['./preview-resume.component.scss'],
})
export class PreviewResumeComponent implements OnInit {
  resumeData: any;
  selectedTemplate: string = 'template1'; // Default template

  constructor(
    private route: ActivatedRoute,
    private resumeDataService: ResumeDataService,
    private router: Router
  ) {
    // Retrieve data and selected template from queryParams
    this.route.queryParams.subscribe((params) => {
      // this.resumeData = JSON.parse(params['data'] || '{}');
      this.selectedTemplate = params['template'] || 'template1';
    });

    // Retrieve form data from the service
    this.resumeData = this.resumeDataService.getResumeData();
  }

  ngOnInit(): void {
    console.log(this.resumeData);
  }

  // Method to navigate back to the form
  goBackToForm() {
    this.router.navigate(['/resume-form']);
  }
}
