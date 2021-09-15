import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Group } from "src/app/models/group";
import { GroupService } from "src/app/services/group.service";

@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.css"],
})
export class EditCourseComponent implements OnInit {
  group: Group;
  editCourseForm: FormGroup;
  groupId: number;
  selectedGroup: Group;

  constructor(
    private groupService: GroupService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(
      (url) => (this.groupId = Number(url[1].path))
    );
    console.log(this.groupId);

    this.groupService
      .getGroupById(this.groupId)
      .subscribe((group) => (this.group = group));
    console.log(this.group);

    this.editCourseForm = this.formBuilder.group({
      groupName: [null, Validators.required],
      organizationName: [null, Validators.required],
      sponsorName: [null, Validators.required],
      sponsorPhone: [null, Validators.required],
      sponsorEmail: [null, Validators.required],
      maxGroupSize: [null, Validators.required],
    });
  }

  editGroup(formValues): void {
    this.group.GroupId = 0;
    this.group.GroupName = formValues.groupName;
    this.group.OrganizationName = formValues.OrganizationName;
    this.group.SponsorName = formValues.SponsorName;
    this.group.SponsorPhone = formValues.SponsorPhone;
    this.group.SponsorEmail = formValues.SponsorEmail;
    this.group.MaxGroupSize = formValues.MaxGroupSize;
    this.groupService
      .editGroup(formValues)
      .subscribe((group) => (formValues = group));
  }

  onSubmit(formValues): void {
    this.editGroup(formValues);
    this.groupService
      .getGroupById(this.groupId)
      .subscribe((group) => (this.selectedGroup = group));
    console.log(this.selectedGroup);

    const routePath = `courseDetails/${this.selectedGroup.GroupId}`;
    console.log(routePath);
    this.router.navigateByUrl(`${routePath}`);
  }

  cancel() {
    this.groupService
      .getGroupById(this.groupId)
      .subscribe((group) => (this.selectedGroup = group));
    console.log(this.selectedGroup);

    const routePath = `courseDetails/${this.selectedGroup.GroupId}`;
    console.log(routePath);
    this.router.navigateByUrl(`${routePath}`);
  }
}
