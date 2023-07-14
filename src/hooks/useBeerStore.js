import { create } from 'zustand';

export const useBeerStore = create((set) => (
    {
        data: [],
        initFetchData: async (url) => {
            const response = await fetch(url);
            const data = await response.json(); // Extract the data from the response
            set({ data });
          },
          selectedItems: [],
          addSelectedItems: (id) =>
          set((state) => ({
            selectedItems: [...state.selectedItems, id],
          })),
}))