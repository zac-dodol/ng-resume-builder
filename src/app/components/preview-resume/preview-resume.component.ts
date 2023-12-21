import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
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
  @ViewChild('resumeContent') resumeContent!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private resumeDataService: ResumeDataService,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.route.queryParams.subscribe((params) => {
      // data will be in url and refresh wont lose it
      this.resumeData = JSON.parse(params['data'] || '{}');
      this.selectedTemplate = params['template'] || 'template1';
    });

    // Retrieve form data from the service
    // this.resumeData = this.resumeDataService.getResumeData();
  }

  ngOnInit(): void {
    console.log(this.resumeData);
  }

  // Method to navigate back to the form
  goBackToForm() {
    this.router.navigate(['/resume-form']);
  }

  // Method to print resume preview
  printResume() {
    const content: Element = this.resumeContent.nativeElement;
    const printWindow = window.open('', '_blank');

    if (printWindow) {
      // Clone the content of the resumeContent div and append it to the print window
      const contentClone = content.cloneNode(true);
      printWindow.document.body.appendChild(contentClone);

      // Add styles to the print window
      const styles = Array.from(document.styleSheets)
        .map((styleSheet) => {
          if (styleSheet.cssRules) {
            return Array.from(styleSheet.cssRules)
              .map((cssRule) => cssRule.cssText)
              .join('\n');
          }
          return '';
        })
        .join('\n');

      const styleElement = printWindow.document.createElement('style');
      styleElement.textContent = styles;
      printWindow.document.head.appendChild(styleElement);

      printWindow.print();
      printWindow.onafterprint = () => {
        printWindow.close();
      };
    } else {
      alert('Error: Unable to open print window. Please allow pop-ups.');
    }
  }
}
