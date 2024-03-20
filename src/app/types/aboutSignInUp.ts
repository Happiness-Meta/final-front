import { RefObject } from "react";

export interface AboutSignUpInputs {
  handlePutInfo: (sort: string, value: string) => void;
  nicknameCompanyPlaceHolder: string;
  pwRef: RefObject<HTMLInputElement>;
  pwVerRef: RefObject<HTMLInputElement>;
}

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
  handlePutInfo: (sort: string, value: string) => void;
  positionList: string[];
}

export interface AboutInfoForIndiSignUp {
  email: string;
  nickname: string;
  password: string;
  position: string;
}

export interface AboutInfoForCorpSignUp {
  email: string;
  name: string;
  password: string;
  address: string;
  phoneNumber: string;
  industry: string;
}
