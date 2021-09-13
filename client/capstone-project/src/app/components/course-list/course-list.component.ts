import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  displayDialog: boolean;
  newGroup: boolean;
  selectedGroup: Group;
  groups: Group[];
  cols: any[];
  group: Group;
  allGroups;

  constructor(private groupService: GroupService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => this.group = groups);
  }

  showDialogToAdd() {
    this.newGroup = true;
    this.group = null;
    this.displayDialog = true;
  }

  save() {
    let groups = [...this.groups];
    if (this.newGroup) {
      groups.push(this.group);
    } else {
      groups[this.groups.indexOf(this.selectedGroup)] = this.group;
    }

    this.groups = groups;
    this.group = null;
    this.displayDialog = false;
  }

  cancel() {
    let index = this.groups.indexOf(this.selectedGroup);
    this.groups = this.groups.filter((val, i) => i != index);
    this.group = null;
    this.displayDialog = false;
  }

  onRowSelect(event, group) {
    this.newGroup = false;
    this.router.navigate(['details']);
  }
}