export interface myInfo {
  Field: string;
  id: string;
  techStack: string[];
  userEmail: string;
  userNickname: string;
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
