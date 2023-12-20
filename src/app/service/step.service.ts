import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  private currentStep = 0;

  getCurrentStep() {
    return this.currentStep;
  }

  setCurrentStep(step: number) {
    this.currentStep = step;
  }
}
