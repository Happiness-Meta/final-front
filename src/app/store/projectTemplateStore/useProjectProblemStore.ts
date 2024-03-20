import { AboutProblem } from "@/app/types/portfolioDto";
import { create } from "zustand";

interface AboutProjectProblemStore {
  projProblems: AboutProblem[];
  addProblem: () => void;
  deleteProblem: (index: number) => void;
  setProblem: (
    sort: keyof AboutProblem,
    content: string,
    order: number
  ) => void;
}

export const useProjectProblemStore = create<AboutProjectProblemStore>(
  (set) => ({
    projProblems: [{ definition: "", reason: "", solution: "" }],
    addProblem: () =>
      set((state) => ({
        projProblems: [
          ...state.projProblems,
          { definition: "", reason: "", solution: "" },
        ],
      })),
    deleteProblem: (index) =>
      set((state) => ({
        projProblems: state.projProblems.filter((_, i) => i !== index),
      })),
    setProblem: (sort, content, order) =>
      set((state) => ({
        projProblems: state.projProblems.map((prob, i) =>
          i === order ? { ...prob, [sort]: content } : prob
        ),
      })),
  })
);
