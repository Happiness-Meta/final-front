import { create } from "zustand";

interface AboutFunction {
  function: string;
  contribution: number;
}

interface AboutTemplateInputStore {
  projFuncs: AboutFunction[];
  addFunc: () => void;
  putTextInFunc: (text: string, order: number) => void;
  putContInFunc: (cont: number, order: number) => void;
  deleteFunc: (index: number) => void;
}

export const useTemplateInputStore = create<AboutTemplateInputStore>((set) => ({
  projFuncs: [{ function: "", contribution: 100 }],
  addFunc: () =>
    set((state) => ({
      projFuncs: [...state.projFuncs, { function: "", contribution: 0 }],
    })),
  putTextInFunc: (text, order) =>
    set((state) => {
      const updatedStatus = [...state.projFuncs];
      updatedStatus[order].function = text;
      return { projFuncs: updatedStatus };
    }),
  putContInFunc: (cont, order) =>
    set((state) => {
      const updatedStatus = [...state.projFuncs];
      updatedStatus[order].contribution = cont;
      return { projFuncs: updatedStatus };
    }),
  deleteFunc: (index) =>
    set((state) => {
      const updatedStatus = state.projFuncs.filter((_, i) => i !== index);
      console.log(updatedStatus);
      return { projFuncs: updatedStatus };
    }),
}));
