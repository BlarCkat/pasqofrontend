import { ProfileComponent } from './components/profile/profile.component';
import { CourseFormComponent } from './components/course/course-form/course-form.component';
import { CourseComponent } from './components/course/course.component';
import { ProgrammeFormComponent } from './components/programme/programme-form/programme-form.component';
import { ProgrammeComponent } from './components/programme/programme.component';
import { SchoolFormComponent } from './components/school/school-form/school-form/school-form.component';
import { SchoolComponent } from './components/school/school.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  { path: 'users', component: UserComponent, canActivate: [AuthGuardService]},
  { path: 'userform', component: UserFormComponent, canActivate: [AuthGuardService]},
  { path: 'userform/:id', component: UserFormComponent, canActivate: [AuthGuardService]},
  { path: 'schools', component: SchoolComponent, canActivate: [AuthGuardService]},
  { path: 'schoolform', component: SchoolFormComponent, canActivate: [AuthGuardService]},
  { path: 'schoolform/:id', component: SchoolFormComponent, canActivate: [AuthGuardService]},
  { path: 'programmes', component: ProgrammeComponent, canActivate: [AuthGuardService]},
  { path: 'programmeform', component: ProgrammeFormComponent, canActivate: [AuthGuardService]},
  { path: 'programmeform/:id', component: ProgrammeFormComponent, canActivate: [AuthGuardService]},
  { path: 'courses', component: CourseComponent, canActivate: [AuthGuardService]},
  { path: 'courseform', component: CourseFormComponent, canActivate: [AuthGuardService]},
  { path: 'courseform/:id', component: CourseFormComponent, canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},


  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
