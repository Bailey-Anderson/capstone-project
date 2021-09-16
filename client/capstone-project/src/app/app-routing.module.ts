import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AddStudentComponent } from './components/course-details/add-student/add-student.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CreateCourseComponent } from './components/course-list/create-course/create-course.component';
import { EditCourseComponent } from './components/course-details/edit-course/edit-course.component';

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
      { path: 'courseDetails/:groupId', component: CourseDetailsComponent },
      { path: 'createCourse', component: CreateCourseComponent },
      { path: 'editCourse', component: EditCourseComponent},
      { path: 'editCourse/:groupId', component: EditCourseComponent},
      { path: 'courseDetails/:groupId/addStudent', component: AddStudentComponent},
      fallbackRoute
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
