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

@NgModule({
  declarations: [AppComponent, ResumeFormComponent, PreviewResumeComponent, Template1Component, Template2Component],
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
