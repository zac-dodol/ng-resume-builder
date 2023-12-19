import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss'],
})
export class Template1Component {
  @Input() resumeData: any;
}
