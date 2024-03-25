interface AboutLink {
  address: string;
  description: string;
  id: number;
}

interface AboutProblemAndSolution {
  definition: string;
  reason: string;
  solution: string;
  id: number;
}

interface AboutProjectFunction {
  description: string;
  contribution: number;
  id: number;
}

export interface AboutGetData {
  contained: boolean;
  createdAt: string;
  description: string;
  id: number;
  lastModifiedAt: string;
  link: AboutLink[];
  personnel: number;
  problemAndSolution: AboutProblemAndSolution[];
  projectEndDate: string;
  projectFunction: AboutProjectFunction[];
  projectName: string;
  projectStartDate: string;
  takeaway: string;
  techStack: string[];
  themeColor: string;
}

export interface AboutProjectSections {
  data: AboutGetData | undefined;
}
