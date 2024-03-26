export interface myInfo {
  position: string;
  id: string;
  techStack: string[];
  email: string;
  name: string;
  industry: string;
  address: string;
  roles: string[];
  telephone: string;
}

export interface companyInfo {
  companyName: string;
  companyEmail: string;
  companyAddress: string;
  companyPhoneNumber: string;
  companyIndustry: string;
}

export interface getDataTypes {
  setUserData: () => myDataTypes;
}

interface myDataTypes {
  Field: string;
  id: string;
  techStack: string[];
  userEmail: string;
  userNickname: string;
}
