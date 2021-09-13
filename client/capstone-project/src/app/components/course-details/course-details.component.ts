import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  group: Group;
  groups: Group[];
  groupId: number;
  displayEditCourseDialog: boolean = false;
  displayStudentDialog: boolean = false;
  selectedGroup: Group;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => this.group = groups);
    // this.groupId = this.group.groupId;
    // this.groupService.getGroupById(this.groupId).subscribe(group => this.group = group);
  }

  getGroup(id: number): void {
    this.groupService.getGroupById(id).subscribe(group => this.group = group,
    error => console.log(error));
  }

  // groupRetrieved(group: Group): void {
  //   this.group = group;
  // }

  showCourseEditDialog():void {
    this.displayEditCourseDialog = true;
  }

  showStudentDialog(): void {
    this.displayStudentDialog = true;
  }

  cancel() {
    let index = this.groups.indexOf(this.selectedGroup);
    this.groups = this.groups.filter((val, i) => i != index);
    this.group = null;
    this.displayEditCourseDialog = false;
  }

  add() {

  }

  save(group: Group) {

  }
}
