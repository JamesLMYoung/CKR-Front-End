import { create } from "zustand"

type FilterStore = {
    fileFilter: any;
    changeFileFilter: (newFilter: any) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
    fileFilter: ['Any', 'Any', 'Any', 'Any', 'Any', 'Any', []],
    changeFileFilter: (newFilter) => {
        set({ fileFilter: newFilter})
    }
}))