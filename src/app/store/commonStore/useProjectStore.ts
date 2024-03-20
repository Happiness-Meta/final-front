import { create } from "zustand";

interface AboutDynamicQuestionsContainer {
  name: string;
  color: string;
  startDate: string;
  endDate: string;
  personnel: number;
  description: string;
  takeaway: string;
}

interface AboutProjectStore {
  order: number;
  setOrder: (num: number) => void;
  orderToSix: () => void;
  dynamicQuestionsContainer: AboutDynamicQuestionsContainer;
  setDynamicQuestions: (
    sort: keyof AboutDynamicQuestionsContainer,
    content: string | number
  ) => void;
  clickedColor: string;
  setClickedColor: (color: string) => void;
}

const useProjectStore = create<AboutProjectStore>((set) => ({
  order: 0,
  setOrder: (num) => set((state) => ({ order: state.order + num })),
  orderToSix: () => set({ order: 6 }),
  dynamicQuestionsContainer: {
    name: "",
    color: "#FFFFFF",
    startDate: "",
    endDate: "",
    personnel: 1,
    description: "",
    takeaway: "",
  },

  setDynamicQuestions: (sort, content) =>
    set((state) => ({
      dynamicQuestionsContainer: {
        ...state.dynamicQuestionsContainer,
        [sort]: content,
      },
    })),
  clickedColor: "#FFFFFF",
  setClickedColor: (color) => set({ clickedColor: color }),
}));

export default useProjectStore;
