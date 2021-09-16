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
    this.editCourseForm = formBuilder.group({
      GroupId: [null, Validators.required],
      GroupName: [null, Validators.required],
      OrganizationName: [null, Validators.required],
      SponsorName: [null, Validators.required],
      SponsorPhone: [null, Validators.required],
      SponsorEmail: [null, Validators.required],
      MaxGroupSize: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(
      (url) => (this.groupId = Number(url[1].path))
    );
    console.log(this.groupId);

    this.groupService.getGroupById(this.groupId).subscribe((group) => (this.selectedGroup = group));
    console.log(this.selectedGroup);


  }

  mapFormToGroup(): Group {
    return {
      GroupId: this.selectedGroup.GroupId,
      GroupName: this.groupNameInput(),
      OrganizationName: this.organizationNameInput(),
      SponsorName: this.sponsorNameInput(),
      SponsorPhone: this.sponsorPhoneInput(),
      SponsorEmail: this.sponsorEmailInput(),
      MaxGroupSize: this.maxGroupSizeInput()
    }
  }

  groupNameInput(): string {
    if (this.editCourseForm.get('GroupName').value === null) {
      return this.selectedGroup.GroupName;
    } else {
      return this.editCourseForm.get('GroupName').value;
    }
  }

  organizationNameInput(): string {
    if (this.editCourseForm.get('OrganizationName').value === null) {
      return this.selectedGroup.OrganizationName;
    } else {
      return this.editCourseForm.get('OrganizationName').value;
    }
  }

  sponsorNameInput(): string {
    if (this.editCourseForm.get('SponsorName').value === null) {
      return this.selectedGroup.SponsorName;
    } else {
      return this.editCourseForm.get('SponsorName').value;
    }
  }

  sponsorPhoneInput(): string {
    if (this.editCourseForm.get('SponsorPhone').value === null) {
      return this.selectedGroup.SponsorPhone;
    } else {
      return this.editCourseForm.get('SponsorPhone').value;
    }
  }

  sponsorEmailInput(): string {
    if (this.editCourseForm.get('SponsorEmail').value === null) {
      return this.selectedGroup.SponsorEmail;
    } else {
      return this.editCourseForm.get('SponsorEmail').value;
    }
  }

  maxGroupSizeInput(): number {
    if (this.editCourseForm.get('MaxGroupSize').value === null) {
      return this.selectedGroup.MaxGroupSize;
    } else {
      return this.editCourseForm.get('MaxGroupSize').value;
    }
  }
  

  onSubmit(): void {
    this.selectedGroup = this.mapFormToGroup();
    this.groupService.editGroup(this.selectedGroup).subscribe(
      (group) => { 
        this.groupService.getGroupById(this.group.GroupId);
      },
      (error) => {
        alert(`Invalid data entered. Please ensure the entire form is filled out and try again`);
      });

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
