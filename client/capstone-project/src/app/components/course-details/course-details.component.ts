import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { Member } from 'src/app/models/member';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnChanges {

  group: Group;
  groups: Group[];
  member: Member;
  members: Member[];
  groupId: number;
  selectedGroup: Group;

  constructor(private groupService: GroupService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe((groupId) => this.groupId = groupId)
    // console.log(this.groupId);

    this.group.GroupId = this.router.getCurrentNavigation().id.valueOf();
    console.log(this.group.GroupId);
    this.groupService.getGroupById(this.group.GroupId).subscribe((group) => this.group = group);
    console.log(this.group);
  }

  ngOnChanges(): void {

  }

  deleteCourse(group: Group) {

  }

  returnToCourses() {
    this.router.navigate(['courseList']);
  }

  removeStudent(member: Member) {

  }

  editCourseDetails(): void {
    this.router.navigate(['editCourse']);
  }

  addStudent(): void {
    this.router.navigate(['addStudent']);
  }
}
