import { create } from 'zustand';

export const useBeerStore = create((set, get) => (
    {
        page: 1,
        // url: `https://api.punkapi.com/v2/beers?page=1`,
        data: [],
        initFetchData: async () => {
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${get().page}`);
            const data = await response.json();
            set({ data });
          },

          selectedItems: [],
          addSelectedItems: (id) =>
          set((state) => ({
            selectedItems: state.selectedItems.filter(item => item === id).length !== 0? state.selectedItems.filter(item => item !== id) : [...state.selectedItems, id],
          })),

          deleteSelectedItem: () => {
            set(state => {
              const filtered = state.data.filter(item => !state.selectedItems.includes(item.id));
              return {
                data: filtered,
                selectedItems: [],
              };
            })
          },

}))