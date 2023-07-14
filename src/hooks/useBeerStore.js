import { create } from 'zustand';

export const useBeerStore = create((set) => (
    {
        data: [],
        initFetchData: async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            set({ data });
          },

          selectedItems: [],
          addSelectedItems: (id) =>
          set((state) => ({
            selectedItems: state.selectedItems.filter(item => item === id).length !== 0? state.selectedItems.filter(item => item !== id) : [...state.selectedItems, id],
          })),
}))