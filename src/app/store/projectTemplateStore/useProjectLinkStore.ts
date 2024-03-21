import { AboutLink } from "@/app/types/portfolioDto";
import { create } from "zustand";

interface AboutProjectLinkStore {
  links: AboutLink[];
  addLink: () => void;
  deleteLink: (order: number) => void;
  setLink: (sort: keyof AboutLink, content: string, order: number) => void;
}

export const useProjectLinkStore = create<AboutProjectLinkStore>((set) => ({
  links: [{ description: "", address: "" }],
  addLink: () =>
    set((state) => ({
      links: [...state.links, { description: "", address: "" }],
    })),
  deleteLink: (order: number) =>
    set((state) => ({
      links: state.links.filter((_, i) => i !== order),
    })),
  setLink: (sort, content, order) =>
    set((state) => ({
      links: state.links.map((link, index) =>
        index === order ? { ...link, [sort]: content } : link
      ),
    })),
}));
