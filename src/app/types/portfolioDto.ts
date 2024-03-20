export interface AboutFunction {
  function: string;
  contribution: number;
}

export interface AboutProblem {
  definition: string;
  reason: string;
  solution: string;
}

export interface AboutLink {
  description: string;
  link: string;
}

export interface CreatePortfolioDTO {
  visibility: boolean; // 공개 여부 -> private
  themeColor: string; // 메인 컬러 -> #FFFFFF
  projectName: string; // 프로젝트 명 -> not null
  description: string; // 프로젝트 설명 -> not null
  personnel: number;
  techStack: string[]; // 기술 스택 -> not null
  projectStartDate: string; // 프로젝트 시작일 -> not null
  projectEndDate: string; // 프로젝트 종료일 -> not null
  projectFunction: AboutFunction[]; //not null
  problemAndSolution: AboutProblem[]; //nullable
  link: AboutLink[]; //nullable
  takeaway: string; // 프로젝트에서 배운 점 -> nullable
  token: string;
}

export interface ReadPortfolioDTO {
  visibility: boolean; // 공개 여부 -> private
  themeColor: string; // 메인 컬러 -> #FFFFFF
  projectName: string; // 프로젝트 명 -> not null
  description: string; // 프로젝트 설명 -> not null
  techStack: string[]; // 기술 스택 -> not null
  projectStartDate: Date; // 프로젝트 시작일 -> not null
  projectEndDate: Date; // 프로젝트 종료일 -> not null
  projectFunction: AboutFunction[]; //not null
  problemAndSolution: AboutProblem[]; //nullable
  link: AboutLink[]; //nullable
  takeaway: string; // 프로젝트에서 배운 점 -> nullable
}

export interface UpdatePortfolioDTO {
  visibility: boolean; // 공개 여부 -> private
  themeColor: string; // 메인 컬러 -> #FFFFFF
  projectName: string; // 프로젝트 명 -> not null
  description: string; // 프로젝트 설명 -> not null
  techStack: string[]; // 기술 스택 -> not null
  projectStartDate: Date; // 프로젝트 시작일 -> not null
  projectEndDate: Date; // 프로젝트 종료일 -> not null
  projectFunction: AboutFunction[]; //not null
  problemAndSolution: AboutProblem[]; //nullable
  link: AboutLink[]; //nullable
  takeaway: string; // 프로젝트에서 배운 점 -> nullable
}

export interface DeletePortfolioDTO {
  id: number;
}
