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
