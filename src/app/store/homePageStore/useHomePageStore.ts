import { create } from "zustand";
import ProfileImage from "@/app/assets/svg/profilePicture.svg";
import BusinessImage from "@/app/assets/svg/business001.svg";
import BusinessImage2 from "@/app/assets/svg/business002.svg";

export interface HomePagePeopleProfile {
  name: string;
  description: string;
  image: string;
}

interface AboutHomePage {
  profiles: { [key: string]: HomePagePeopleProfile };
  pictures: { [key: string]: string };
}

const useHomePageStore = create<AboutHomePage>((set) => ({
  profiles: {
    people1: {
      name: "Jason",
      description: "Hello im Jason",
      image: ProfileImage,
    },
    people2: {
      name: "sooyeon",
      description: "",
      image: ProfileImage,
    },
    people3: {
      name: "yunseok",
      description: "",
      image: ProfileImage,
    },
  },

  pictures: {
    pic1: BusinessImage,
    pic2: BusinessImage2,
    pic3: BusinessImage,
    pic4: BusinessImage2,
    pic5: BusinessImage,
    pic6: BusinessImage2,
  },
}));

export default useHomePageStore;
