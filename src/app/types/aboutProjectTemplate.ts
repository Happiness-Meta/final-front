import { RefObject } from "react";

export interface AboutProjectName {
  nameRef: RefObject<HTMLInputElement>;
}

export interface AboutProjectPeriod {
  startDateRef: RefObject<HTMLInputElement>;
  endDateRef: RefObject<HTMLInputElement>;
}

export interface AboutProjectPersonnel {
  personnelRef: RefObject<HTMLInputElement>;
}

export interface AboutProjectDescription {
  descriptionRef: RefObject<HTMLTextAreaElement>;
}

export interface AboutProjectFunction {
  projectFuntionRef: RefObject<HTMLInputElement>;
  projFuncContRef: RefObject<HTMLInputElement>;
}

export interface AboutProjectProblem {
  pDefinitionRef: RefObject<HTMLInputElement>;
  pReasonRef: RefObject<HTMLTextAreaElement>;
  pSolutionRef: RefObject<HTMLTextAreaElement>;
}

export interface AboutProjectLink {
  linkNameRef: RefObject<HTMLInputElement>;
  linkRef: RefObject<HTMLInputElement>;
}
