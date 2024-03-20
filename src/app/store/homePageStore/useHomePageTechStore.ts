import { create } from "zustand";

interface AboutHomePageTechStore {
  techStackContainer: string[];
  addTechStack: (T: string) => void;
  removeTechStack: (T: string) => void;
}

const useHomePageTechStore = create<AboutHomePageTechStore>((set) => ({
  techStackContainer: [],
  addTechStack: (stack) =>
    set((state) => {
      if (!state.techStackContainer.includes(stack) && state.techStackContainer.length <= 14) {
        return {
          techStackContainer: [...state.techStackContainer, stack],
        };
      }
      return state;
    }),
  removeTechStack: (stack) =>
    set((state) => ({
      techStackContainer: state.techStackContainer.filter((name) => name !== stack),
    })),
}));

export default useHomePageTechStore;
