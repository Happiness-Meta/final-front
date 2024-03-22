export interface portPoliosThumbnailData {
  userName: string;
  projectName: string;
  techStack: string[];
  projectStartDate: Date;
  projectEndDate: Date;
  projectPersonnel: number;
  projectOutline: string;
}
export interface workspaceRemoveData {
  removeData: (T: string) => void;
}
