import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';

const fallbackRoute: Route = {
  path: '**',
  component: CourseListComponent,
};

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'courseList', component: CourseListComponent },
      { path: 'courseDetails', component: CourseDetailsComponent },
      { path: 'createCourse', component: CreateCourseComponent },
      fallbackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
