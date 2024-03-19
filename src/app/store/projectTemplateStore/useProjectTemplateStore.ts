import { create } from "zustand";

interface AboutProjectTemplateStore {
  guideMessage: string;
  setGuideMessage: (message: string) => void;
  guideMessageAni: boolean;
  setGuideMessageAni: () => void;
  mainFuntionList: string[][];
  addMainFunction: () => void;
}

export const useProjectTemplateStore = create<AboutProjectTemplateStore>(
  (set) => ({
    guideMessage: "",
    setGuideMessage: (message: string) => set({ guideMessage: message }),
    guideMessageAni: false,
    setGuideMessageAni: () =>
      set((state) => ({ guideMessageAni: !state.guideMessageAni })),
    mainFuntionList: [[]],
    addMainFunction: () => set,
  })
);
