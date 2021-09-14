import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';
import { Member } from 'src/app/models/member';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  member: Member;
  members: Member[];
  group: Group;
  addStudentForm: FormGroup;

  constructor(private groupService: GroupService,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.router = router;
      this.addStudentForm = formBuilder.group({
        memberName: [null, Validators.required],
        memberEmail: [null, Validators.required],
        memberPhone: [null, Validators.required]
      });
    }

  ngOnInit(): void {
    this.groupService.getGroups().subscribe(groups => this.group = groups);
  }

  addStudent(formValues): void {
    this.member.MemberId = 0;
    this.member.MemberName = formValues.memberName;
    this.member.MemberEmail = formValues.memberEmail;
    this.member.MemberPhone = formValues.memberPhone;
    this.groupService.addMemberToGroup(this.group, this.group.GroupId);
    this.router.navigate(['courseDetails'])
  }

  onSubmit(formValues): void {
    this.addStudent(formValues);
  }

  cancel() {
    this.router.navigate(['courseDetails']);
  }

}
