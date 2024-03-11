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

export interface AboutSignUpInputs {
  emailRef: RefObject<HTMLInputElement>;
  nicknameCompanyRef: RefObject<HTMLInputElement>;
  nicknameCompanyPlaceHolder: string;
  pwRef: RefObject<HTMLInputElement>;
  pwVerRef: RefObject<HTMLInputElement>;
  isPwVisible: boolean;
  setIsPwVisible: (T: boolean) => void;
  pwCheckMessage: string;
  setPwCheckMessage: (T: string) => void;
}

export interface AboutTechStackSpace {
  searchTechStackRef: RefObject<HTMLInputElement>;
  techStackList: string[];
  setSearchedList: (T: string[]) => void;
  isTechStacksVisible: boolean;
  setIsTechStacksVisible: (T: boolean) => void;
  searchedList: string[];
}
