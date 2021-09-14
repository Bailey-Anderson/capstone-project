import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule, CardModule } from 'primeng';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component'; 
import { GroupService } from './services/group.service';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseListComponent,
    CourseDetailsComponent,
    FooterComponent,
    CreateCourseComponent,
    EditCourseComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent],
})
export class AppModule { }
