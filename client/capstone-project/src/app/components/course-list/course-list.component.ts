import { _fixedSizeVirtualScrollStrategyFactory } from '@angular/cdk/scrolling';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  selectedGroup: Group;
  cols: any[];
  group: Group;
  groupId: number;

  createCourseForm: FormGroup;

  constructor(private groupService: GroupService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { 
                this.router = router;
                this.createCourseForm = formBuilder.group({
                  groupName: [null, Validators.required],
                  organizationName: [null, Validators.required],
                  sponsorName: [null, Validators.required],
                  sponsorPhone: [null, Validators.required],
                  sponsorEmail: [null, Validators.required],
                  maxGroupSize: [null, Validators.required]
                });
              }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => this.group = groups);

  }

  createCourse() {
    this.router.navigate(['createCourse']);
  }

  onRowSelect() {
    this.activatedRoute.params.subscribe((group) => this.groupId = group.id);
    console.log(this.groupId);
    this.groupService.getGroupById(this.groupId).subscribe((group) => this.selectedGroup = group);
    console.log(this.selectedGroup);
    this.router.navigateByUrl(`courseDetails/${this.groupId}`);
  }
}