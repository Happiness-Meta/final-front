import { create } from "zustand";

interface AboutFunction {
  function: string;
  contribution: number;
}

interface AboutProjectFunctionStore {
  projFuncs: AboutFunction[];
  addFunc: () => void;
  deleteFunc: (index: number) => void;
  setFunc: (
    sort: keyof AboutFunction,
    content: string | number,
    order: number
  ) => void;
}

export const useProjectFunctionStore = create<AboutProjectFunctionStore>(
  (set) => ({
    projFuncs: [{ function: "", contribution: 100 }],
    addFunc: () =>
      set((state) => ({
        projFuncs: [...state.projFuncs, { function: "", contribution: 100 }],
      })),
    deleteFunc: (index) =>
      set((state) => ({
        projFuncs: state.projFuncs.filter((_, i) => i !== index),
      })),
    setFunc: (sort, content, order) =>
      set((state) => ({
        projFuncs: state.projFuncs.map((func, i) =>
          i === order ? { ...func, [sort]: content } : func
        ),
      })),
  })
);
