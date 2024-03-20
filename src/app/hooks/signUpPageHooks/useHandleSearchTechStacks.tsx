import { RefObject } from "react";

interface AboutHandleSearchTechStacks {
  searchTechStackRef: RefObject<HTMLInputElement>;
  techStackList: string[];
  setSearchedList: (T: string[]) => void;
}

export const handleSearchTechStacks: (
  params: AboutHandleSearchTechStacks
) => void = ({ searchTechStackRef, techStackList, setSearchedList }) => {
  const searchTerm = searchTechStackRef.current?.value.toLowerCase();
  if (searchTerm?.length! > 0) {
    const filteredTechStack = techStackList.filter((tech) =>
      tech.toLowerCase().includes(searchTerm!)
    );
    setSearchedList(filteredTechStack);
  } else {
    setSearchedList(techStackList);
  }
};
