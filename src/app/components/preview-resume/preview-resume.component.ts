import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-resume',
  templateUrl: './preview-resume.component.html',
  styleUrls: ['./preview-resume.component.scss'],
})
export class PreviewResumeComponent implements OnInit {
  resumeData: any;

  constructor(private route: ActivatedRoute) {
    // Retrieve data passed from the form component
    this.route.paramMap.subscribe((params) => {
      // Use params.get('data') if you are using paramMap or params['data'] for snapshot
      this.resumeData = JSON.parse(params.get('data') || '{}');
    });
  }

  ngOnInit(): void {
    console.log(this.resumeData);
  }
}
