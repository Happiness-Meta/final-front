import { AboutFunction } from "@/app/types/portfolioDto";
import { create } from "zustand";

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
    projFuncs: [{ description: "", contribution: 100 }],
    addFunc: () =>
      set((state) => ({
        projFuncs: [...state.projFuncs, { description: "", contribution: 100 }],
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
