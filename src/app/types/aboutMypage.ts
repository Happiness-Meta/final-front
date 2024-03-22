export interface myInfo {
  Field: string;
  id: string;
  techStack: string[];
  userEmail: string;
  userNickname: string;
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
