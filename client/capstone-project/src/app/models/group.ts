export class Group {
    groupId: number;
    groupName: string;
    organizationName: string;
    sponsorName: string;
    sponsorPhone: string;
    sponsorEmail: string;
    maxGroupSize: number;
    members: {
        memberId: number,
        memberEmail: string,
        memberPhone: string
    }

constructor(groupId, groupName, organizaitonName, sponsorName, sponsorPhone, sponsorEmail, maxGroupSize, members) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.organizationName = organizaitonName;
        this.sponsorName = sponsorName;
        this.sponsorPhone = sponsorPhone;
        this.sponsorEmail = sponsorEmail;
        this.maxGroupSize = maxGroupSize;
        this.members = members;
    }
}