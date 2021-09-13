import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  errorMessage: string;

  private groupUrl: string = 'http://localhost:8082/api/groups'

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }

  constructor(private http: HttpClient) { }

  getGroups(): Observable<Group> {
    const results: Observable<Group> = this.http.get<Group>(this.groupUrl);
    console.log(`getGroups() returned ${results}`);
    return results;
  }

  getGroupById(groupId: number): Observable<Group> {
    const results: Observable<Group> = this.http.get<Group>(`${this.groupUrl}/${groupId}`);
    return results;
  }

  getGroupByOrganization(organizationId: string): Observable<Group> {
    const results: Observable<Group> = this.http.get<Group>(`${this.groupUrl}/byorganization/${organizationId}`);
    return results;
  }

  getMemberInGroup(groupId: number, memberId: number): Observable<Group> {
    const results: Observable<Group> = this.http.get<Group>(`${this.groupUrl}/${groupId}/members/${memberId}`);
    return results;
  }

  addGroup(group: Group): Observable<Group> {
    const results: Observable<Group> = this.http.post<Group>(this.groupUrl, group, this.jsonContentTypeHeaders);
    return results;
  }

  addMemberToGroup(group: Group, groupId: number): Observable<Group> {
    const results: Observable<Group> = this.http.post<Group>(`${this.groupUrl}/${groupId}/members`, group, this.jsonContentTypeHeaders);
    return results;
  }

  editGroup(group: Group): Observable<Group> {
    const results: Observable<Group> = this.http.put<Group>(this.groupUrl, group, this.jsonContentTypeHeaders);
    return results;
  }

  editGroupMember(group: Group, groupId: number): Observable<Group> {
    const results: Observable<Group> = this.http.put<Group>(`${this.groupUrl}/${groupId}/members`, group, this.jsonContentTypeHeaders);
    return results;
  }

  deleteGroupById(groupId: number): Observable<Group> {
    const results: Observable<Group> = this.http.delete<Group>(`${this.groupUrl}/${groupId}`);
    return results;
  }

  deleteMemberFromGroupById(groupId: number, memberId: number): Observable<Group> {
    const results: Observable<Group> = this.http.delete<Group>(`${this.groupUrl}/${groupId}/members/${memberId}`);
    return results;
  }
}
