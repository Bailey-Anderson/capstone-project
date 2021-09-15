import { Member } from "./member";

export class Group {
    GroupId: number;
    GroupName: string;
    OrganizationName: string;
    SponsorName: string;
    SponsorPhone: string;
    SponsorEmail: string;
    MaxGroupSize: number;
    Members: Member[];

constructor(groupId, groupName, organizaitonName, sponsorName, sponsorPhone, sponsorEmail, maxGroupSize, members) {
        this.GroupId = groupId;
        this.GroupName = groupName;
        this.OrganizationName = organizaitonName;
        this.SponsorName = sponsorName;
        this.SponsorPhone = sponsorPhone;
        this.SponsorEmail = sponsorEmail;
        this.MaxGroupSize = maxGroupSize;
        this.Members = members;
    }
}