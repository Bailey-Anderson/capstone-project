import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { Member } from 'src/app/models/member';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  group: Group;
  addStudentForm: FormGroup;
  groupId: number;
  selectedGroup: Group;
  members: Member[];

  constructor(private groupService: GroupService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { 
      this.router = router;
      this.addStudentForm = formBuilder.group({
        MemberName: [null, Validators.required],
        MemberEmail: [null, Validators.required],
        MemberPhone: [null, Validators.required]
      });
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

    this.group.Members = this.members;
  }


  onSubmit(formValues: Member): void {
    this.groupService.addMemberToGroup(formValues, this.group.GroupId).subscribe(
      (group) => {
        this.groupService.getGroupById(this.group.GroupId);
      },
      (error) => {
        alert(`Invalid data entered. Please ensure the entire form is filled out and try again`);
      });
    console.log(formValues);
    
    if (this.addStudentForm.valid) {
      this.router.navigateByUrl(`courseDetails/${this.group.GroupId}`);
    }
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
