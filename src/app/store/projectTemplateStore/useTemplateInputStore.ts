import { create } from "zustand";

interface AboutTemplateInputStore {
  mainFuncs: string[][];
  addMainFunc: () => void;
  putTextInMainFunc: (text: string, order: number) => void;
  myFuncs: string[][];
  addMyFunc: () => void;
  putTextInMyFunc: (text: string, order: number) => void;
  putContInMyFunc: (cont: string, order: number) => void;
}

export const useTemplateInputStore = create<AboutTemplateInputStore>((set) => ({
  mainFuncs: [[]],
  addMainFunc: () => set((state) => ({ mainFuncs: [...state.mainFuncs, []] })),
  putTextInMainFunc: (text, order) =>
    set((state) => {
      const updatedStatus = [...state.mainFuncs];
      updatedStatus[order] = [text];
      return { mainFuncs: updatedStatus };
    }),
  myFuncs: [[]],
  addMyFunc: () => set((state) => ({ myFuncs: [...state.myFuncs, []] })),
  putTextInMyFunc: (text, order) =>
    set((state) => {
      const updatedStatus = [...state.myFuncs];
      updatedStatus[order][0] = text;
      return { myFuncs: updatedStatus };
    }),
  putContInMyFunc: (cont, order) =>
    set((state) => {
      const updatedStatus = [...state.myFuncs];
      updatedStatus[order][1] = cont;
      return { myFuncs: updatedStatus };
    }),
}));
