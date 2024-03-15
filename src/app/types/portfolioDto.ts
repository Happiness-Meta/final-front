interface AboutFunction {
  desc: string; // 기능 설명
  contribution: number; // 기여도
}

interface Problem {
  definition: string; // 문제 정의
  solution: string; // 해결 방안 도출
  resolution: string; // 적용 및 해결
}

interface AboutLink {
  desc: string; // 어떤 링크인가에 대한 설명
  address: string; // 주소
}

export interface CreatePortfolioDTO {
  visibility: boolean; // 공개 여부 -> private
  color: string; // 메인 컬러 -> #FFFFFF
  projectName: string; // 프로젝트 명 -> not null
  description: string; // 프로젝트 설명 -> not null
  techStack: string[]; // 기술 스택 -> not null
  projectStartDate: Date; // 프로젝트 시작일 -> not null
  projectEndDate: Date; // 프로젝트 종료일 -> not null
  mainfunction: string[]; // 주요 기능 -> not null
  myfunction: AboutFunction[]; //not null
  problemAndSolution: Problem[]; //nullable
  link: AboutLink[]; //nullable
  takeaway: string; // 프로젝트에서 배운 점 -> nullable
}

export interface ReadPortfolioDTO {
  visibility: boolean; // 공개 여부 -> private
  color: string; // 메인 컬러 -> #FFFFFF
  projectName: string; // 프로젝트 명 -> not null
  description: string; // 프로젝트 설명 -> not null
  techStack: string[]; // 기술 스택 -> not null
  projectStartDate: Date; // 프로젝트 시작일 -> not null
  projectEndDate: Date; // 프로젝트 종료일 -> not null
  mainfunction: string[]; // 주요 기능 -> not null
  myfunction: AboutFunction[]; //not null
  problemAndSolution: Problem[]; //nullable
  link: AboutLink[]; //nullable
  takeaway: string; // 프로젝트에서 배운 점 -> nullable
}

export interface UpdatePortfolioDTO {
  visibility: boolean; // 공개 여부 -> private
  color: string; // 메인 컬러 -> #FFFFFF
  projectName: string; // 프로젝트 명 -> not null
  description: string; // 프로젝트 설명 -> not null
  techStack: string[]; // 기술 스택 -> not null
  projectStartDate: Date; // 프로젝트 시작일 -> not null
  projectEndDate: Date; // 프로젝트 종료일 -> not null
  mainfunction: string[]; // 주요 기능 -> not null
  myfunction: AboutFunction[]; //not null
  problemAndSolution: Problem[]; //nullable
  link: AboutLink[]; //nullable
  takeaway: string; // 프로젝트에서 배운 점 -> nullable
}

export interface DeletePortfolioDTO {
  id: number;
}
