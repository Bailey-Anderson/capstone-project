import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { Member } from 'src/app/models/member';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, AfterContentChecked {

  group: Group;
  members: Member[];
  groupId: number;
  selectedGroup: Group;
  memberId: number;
  memberName: string;

  constructor(private groupService: GroupService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => this.groupId = Number(url[1].path));
    console.log(this.groupId);

    this.groupService.getGroupById(this.groupId).subscribe((group) => this.group = group);
    console.log(this.group);

  }

  ngAfterContentChecked(): void {
    this.members = this.group.Members;
  }

  deleteCourse(group: Group) {
    if (confirm(`Are you sure you want to delete ${group.SponsorName}? This action cannot be undone`).valueOf() === true) {
      this.groupService.deleteGroupById(this.groupId).subscribe((groups) => group = groups);
      this.router.navigate(['courseList']);
    } else {
      this.router.navigateByUrl(`editCourse/${this.selectedGroup.GroupId}`);
    }
  }

  returnToCourses() {
    this.router.navigate(['courseList']);
  }

  removeStudent() {
    for (let i = 0; i < this.members.length; i++) {
      this.memberId = this.members[i].MemberId;
      this.memberName = this.members[i].MemberName;
    }

    if (confirm(`Are you sure you want to remove ${this.memberName} from this course? This action cannot be undone`).valueOf() === true) {
      this.groupService.deleteMemberFromGroupById(this.group.GroupId, this.memberId).subscribe((group) => this.group = group);
      this.groupService.getGroupById(this.group.GroupId).subscribe((group) => this.group = group);

      this.router.navigateByUrl(`courseDetails/${this.group.GroupId}`);
    } else {
      this.router.navigateByUrl(`courseDetails/${this.group.GroupId}`);
    }

    this.groupService.getGroups().subscribe((group) => this.group = group);
  }

  editCourseDetails(): void {
    this.router.navigateByUrl(`editCourse/${this.group.GroupId}`);
  }

  addStudent(): void {
    const routePath = `courseDetails/${this.group.GroupId}`;
    this.router.navigateByUrl(`${routePath}/addStudent`);
  }
}
