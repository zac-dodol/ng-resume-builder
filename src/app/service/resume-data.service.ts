import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResumeDataService {
  private resumeData: any;

  setResumeData(data: any) {
    this.resumeData = data;
  }

  getResumeData() {
    return this.resumeData;
  }
}
