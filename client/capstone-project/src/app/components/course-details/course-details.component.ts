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
export class CourseDetailsComponent implements OnInit {

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
    this.activatedRoute.url.subscribe(url => this.groupId = Number(url[1].path));
    console.log(this.groupId);
    // this.groupService.getGroups().subscribe((groups) => (this.group = groups));

    this.groupService.getGroupById(this.groupId).subscribe((group) => this.group = group);
    console.log(this.group);

  }

  // ngOnChanges(): void {

  // }

  deleteCourse(group: Group) {
    this.groupService.deleteGroupById(this.groupId).subscribe((groups) => group = groups);
    confirm(`Are you sure you want to delete ${group.SponsorName}? This action cannot be undone`).valueOf();
    if (confirm().valueOf() === true) {
      this.router.navigate(['courseList']);
    }
  }

  returnToCourses() {
    this.router.navigate(['courseList']);
  }

  removeStudent(memberId) {

  }

  editCourseDetails(): void {
    this.groupService.getGroupById(this.groupId).subscribe((group) => this.selectedGroup = group);
    console.log(this.selectedGroup);
    
    const routePath = `editCourse/${this.selectedGroup.GroupId}`;
    console.log(routePath);
    this.router.navigateByUrl(`${routePath}`);
  }

  addStudent(): void {
    this.router.navigate(['addStudent']);
  }
}
