// types
import { portPoliosThumbnailData } from "@/app/types/aboutPortPoliosThumbnailData";

// img
import Chat from "@/app/assets/svg/chat.svg";

export const userPortpolio: portPoliosThumbnailData[] = [
  {
    userName: "서근재",
    projectName: "WEB-IDE",
    techStack: ["TypeScript", "React", "Spring"],
    projectStartDate: new Date(2024, 0, 23),
    projectEndDate: new Date(2024, 1, 25),
    chatImg: Chat,
  },
  {
    userName: "최윤석",
    projectName: "환경 살리기",
    techStack: ["TypeScript", "Next.js", "Spring", "Java"],
    projectStartDate: new Date(2023, 11, 25),
    projectEndDate: new Date(2024, 3, 11),
    chatImg: Chat,
  },
  {
    userName: "김수연",
    projectName: "블로그 웹사이트 만들기",
    techStack: ["TypeScript", "React", "React Query", "Node.js", "zustand"],
    projectStartDate: new Date(2023, 0, 23),
    projectEndDate: new Date(2023, 4, 6),
    chatImg: Chat,
  },
  {
    userName: "양재선",
    projectName: "Happ-Meta",
    techStack: [
      "TypeScript",
      "Next.js",
      "Spring",
      "Java",
      "zustand",
      "Emotion",
      "MySQL",
    ],
    projectStartDate: new Date(2023, 9, 19),
    projectEndDate: new Date(2024, 0, 1),
    chatImg: Chat,
  },
  {
    userName: "서재근",
    projectName: "관광데이터활용",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Spring",
      "Java",
      "MySQL",
    ],
    projectStartDate: new Date(2022, 11, 31),
    projectEndDate: new Date(2023, 11, 1),
    chatImg: Chat,
  },
  {
    userName: "재근",
    projectName: "다이어리 만들기",
    techStack: [
      "Recoil",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Django",
    ],
    projectStartDate: new Date(2024, 5, 19),
    projectEndDate: new Date(2025, 0, 1),
    chatImg: Chat,
  },
];
