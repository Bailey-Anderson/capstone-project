import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  group: Group;
  editCourseForm: FormGroup;

  constructor(private groupService: GroupService,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.router = router;
      this.editCourseForm = formBuilder.group({
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

  editGroup(formValues): void {
    this.group.GroupId = 0;
    this.group.GroupName = formValues.GroupName;
    this.group.OrganizationName = formValues.OrganizationName;
    this.group.SponsorName = formValues.SponsorName;
    this.group.SponsorPhone = formValues.SponsorPhone;
    this.group.SponsorEmail = formValues.SponsorEmail;
    this.group.MaxGroupSize = formValues.MaxGroupSize;
    this.groupService.editGroup(this.group).subscribe();
    this.router.navigate(['courseDetails'])
  }

  onSubmit(formValues): void {
    this.editGroup(formValues);
  }

  cancel() {
    this.router.navigate(['courseDetails']);
  }

}
