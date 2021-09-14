import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  group: Group;
  createCourseForm: FormGroup;

  constructor(private groupService: GroupService,
    private router: Router,
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

  addGroup(formValues): void {
    this.group.GroupId = 0;
    this.group.GroupName = formValues.GroupName;
    this.group.OrganizationName = formValues.OrganizationName;
    this.group.SponsorName = formValues.SponsorName;
    this.group.SponsorPhone = formValues.SponsorPhone;
    this.group.SponsorEmail = formValues.SponsorEmail;
    this.group.MaxGroupSize = formValues.MaxGroupSize;
    this.groupService.addGroup(this.group).subscribe();
    this.router.navigate(['courseList'])
  }

  onSubmit(formValues): void {
    this.addGroup(formValues);
  }

  cancel() {
    this.router.navigate(['courseList']);
  }


}
