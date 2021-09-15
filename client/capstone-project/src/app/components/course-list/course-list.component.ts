import { _fixedSizeVirtualScrollStrategyFactory } from "@angular/cdk/scrolling";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Group } from "src/app/models/group";
import { GroupService } from "src/app/services/group.service";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"],
})
export class CourseListComponent implements OnInit {
  selectedGroup: Group;
  cols: any[];
  group: Group;
  groupId: number;

  constructor(
    private groupService: GroupService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((groups) => (this.group = groups));
  }

  createCourse() {
    this.router.navigate(["createCourse"]);
  }

  onRowSelect() {
    this.activatedRoute.params.subscribe((group) => this.groupId = group.id);

    this.groupService.getGroupById(this.groupId).subscribe((group) => this.selectedGroup = group);
    console.log(this.selectedGroup);
    
    const routePath = `courseDetails/${this.selectedGroup.GroupId}`;
    console.log(routePath);
    this.router.navigateByUrl(`${routePath}`);
  }
}
