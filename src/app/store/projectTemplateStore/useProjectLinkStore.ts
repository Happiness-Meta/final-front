import { create } from "zustand";

interface AboutLink {
  description: string;
  link: string;
}

interface AboutProjectLinkStore {
  links: AboutLink[];
  addLink: () => void;
  deleteLink: (order: number) => void;
  setLink: (sort: keyof AboutLink, content: string, order: number) => void;
}

export const useProjectLinkStore = create<AboutProjectLinkStore>((set) => ({
  links: [{ description: "", link: "" }],
  addLink: () =>
    set((state) => ({
      links: [...state.links, { description: "", link: "" }],
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
