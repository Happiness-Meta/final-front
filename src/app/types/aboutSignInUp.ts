import { RefObject } from "react";

export interface AboutHandlePwVerCheck {
  pwRef: RefObject<HTMLInputElement>;
  pwVerRef: RefObject<HTMLInputElement>;
  setPwCheckMessage: (message: string) => void;
}

export interface AboutVisibilityEyes {
  isPwVisible: boolean;
  setIsPwVisible: (T: boolean) => void;
}

export interface HomePagePeopleProfile {
  name: string;
  description: string;
  image: string;
}

export interface AboutHomePage {
  profiles: { [key: string]: HomePagePeopleProfile };
  pictures: { [key: string]: string };
}

export interface AboutPositionSpace {
  positionRef: RefObject<HTMLSelectElement>;
  positionList: string[];
}
