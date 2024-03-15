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
