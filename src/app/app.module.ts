import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewResumeComponent } from './components/preview-resume/preview-resume.component';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Template1Component } from './components/template1/template1.component';
import { Template2Component } from './components/template2/template2.component';
import { PersonalInfoComponent } from './components/resume-form/personal-info/personal-info.component';
import { ExperienceComponent } from './components/resume-form/experience/experience.component';
import { EducationComponent } from './components/resume-form/education/education.component';
import { CertificationComponent } from './components/resume-form/certification/certification.component';
import { ReferenceComponent } from './components/resume-form/reference/reference.component';
import { SkillComponent } from './components/resume-form/skill/skill.component';

@NgModule({
  declarations: [AppComponent, ResumeFormComponent, PreviewResumeComponent, Template1Component, Template2Component, PersonalInfoComponent, ExperienceComponent, EducationComponent, CertificationComponent, ReferenceComponent, SkillComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
