import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseListComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
