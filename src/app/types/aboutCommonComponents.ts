import { RefObject } from "react";

export interface AboutTechStackSpace {
  searchTechStackRef: RefObject<HTMLInputElement>;
  techStackList: string[];
  setSearchedList: (T: string[]) => void;
  isTechStacksVisible: boolean;
  setIsTechStacksVisible: (T: boolean) => void;
  searchedList: string[];
}

export interface AboutProjectColoringSpace {
  paintColorRef: RefObject<HTMLButtonElement>;
}
