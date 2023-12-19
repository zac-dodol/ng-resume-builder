import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { PreviewResumeComponent } from './components/preview-resume/preview-resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/resume-form', pathMatch: 'full' },
  { path: 'resume-form', component: ResumeFormComponent },
  { path: 'preview-resume', component: PreviewResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
