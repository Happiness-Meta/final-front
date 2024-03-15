import { create } from "zustand";

interface AboutProjectStore {
  order: number;
  setOrder: (num: number) => void;
  orderToSix: () => void;
  dynamicQuestionsContainer: string[];
  addDynamicQuestions: (content: string, orders: number) => void;
  clickedColor: string;
  setClickedColor: (color: string) => void;
}

const useProjectStore = create<AboutProjectStore>((set) => ({
  order: 0,
  setOrder: (num) => set((state) => ({ order: state.order + num })),
  orderToSix: () => set({ order: 6 }),
  dynamicQuestionsContainer: ["", "#FFFFFF", "", "", "1", ""],
  addDynamicQuestions: (content, orders) =>
    set((state) => {
      // 기존의 state.dynamicQuestionsContainer을 복사하여 수정
      const updatedContainer = [...state.dynamicQuestionsContainer];
      // 주어진 order 위치에 content를 추가
      updatedContainer[orders] = content;
      // 변경된 배열을 사용하여 상태를 업데이트
      return { dynamicQuestionsContainer: updatedContainer };
    }),
  clickedColor: "#FFFFFF",
  setClickedColor: (color) => set({ clickedColor: color }),
}));

export default useProjectStore;
