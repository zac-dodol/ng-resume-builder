import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss'],
})
export class Template2Component {
  @Input() resumeData: any;
}
