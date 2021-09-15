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
        GroupName: [null, Validators.required],
        OrganizationName: [null, Validators.required],
        SponsorName: [null, Validators.required],
        SponsorPhone: [null, Validators.required],
        SponsorEmail: [null, Validators.required],
        MaxGroupSize: [null, Validators.required]
      });
    }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => this.group = groups);
  }

  onSubmit(formValues): void {
    this.groupService.addGroup(formValues).subscribe((group) => this.groupService.getGroups());
    console.log(formValues);
    console.log('onSubmit called');
    this.router.navigate(['courseList']);
  }

  cancel() {
    this.router.navigate(['courseList']);
  }


}
