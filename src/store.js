import create from "zustand"

const useStore = create((set) => ({
  language: "cz",
  setCZ: () => set((state) => ({ language: "cz" })),
  setEN: () => set((state) => ({ language: "en" })),
  mainColor: "#252930",
  keywordsCodeColor: "#be74d5",
  componentCodeColor: "#f9c55f",
  propNameCodeColor: "#c99462",
  propContCodeColor: "#77bc75",
  tagNameCodeColor: "#d76871",
  functionCodeColor: "#5da8db",
  defaultCodeColor: "#a5abb8",
  commentCodeColor: "#596273",
}))

export default useStore
