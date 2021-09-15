import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group';
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

  constructor(private groupService: GroupService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { 
      this.router = router;
      this.addStudentForm = formBuilder.group({
        memberName: [null, Validators.required],
        memberEmail: [null, Validators.required],
        memberPhone: [null, Validators.required]
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
  }

  addStudent(formValues): void {
    this.group.Members.MemberId = 0;
    this.group.Members.MemberName = formValues.memberName;
    this.group.Members.MemberEmail = formValues.memberEmail;
    this.group.Members.MemberPhone = formValues.memberPhone;
    this.groupService.addMemberToGroup(this.group, this.group.GroupId);
    this.router.navigate(['courseDetails'])
  }

  onSubmit(formValues): void {
    this.addStudent(formValues);
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
