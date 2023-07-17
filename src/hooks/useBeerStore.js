import { create } from 'zustand';

export const useBeerStore = create((set, get) => (
    {
        page: 1,
        data: [],
        selectedItems: [],

        initFetchData: async () => {
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${get().page}`);
            const data = await response.json();
            console.log(data)
            const slicedData = data.slice(0, 15);

            set({ data: slicedData });
          },

          addSelectedItems: (id) =>
          set((state) => ({
            selectedItems: state.selectedItems.filter(item => item === id).length !== 0? state.selectedItems.filter(item => item !== id) : [...state.selectedItems, id],
          })),

          deselectAll: () => {
            set({selectedItems: []})
          },

          deleteSelectedItem: () => {
            set(state => {
              const filtered = state.data.filter(item => !state.selectedItems.includes(item.id));
              return {
                data: filtered,
              };
            })
          },

          fetchCurrentPage: async () => {
            const currentPage = get().page;
            const urlCurrent = `https://api.punkapi.com/v2/beers?page=${currentPage}`;
            const removedNumber = get().selectedItems.length;
            const lastIndex = Math.max(...get().data.map(i => i.id))
        
            const responseCurrent = await fetch(urlCurrent);
            const dataCurrent = await responseCurrent.json();

            console.log(lastIndex, lastIndex+removedNumber, 'fetchCurrentPage')

            const slicedDataCurrent =[...dataCurrent.filter(item=>item.id>lastIndex && item.id<=lastIndex+removedNumber)];

            // console.log(slicedDataCurrent)

            set((state) => ({
              data: [...state.data, ...slicedDataCurrent],
              selectedItems: [],
            }));
          },

          fetchBothPage: async () => {
            const currentPage = get().page;
            const nextPage = currentPage + 1;
            const urlCurrent = `https://api.punkapi.com/v2/beers?page=${currentPage}`;
            const urlNext = `https://api.punkapi.com/v2/beers?page=${nextPage}`;
            const removedNumber = get().selectedItems.length;
            const lastIndex = Math.max(...get().data.map(i => i.id))
        
            const responseCurrent = await fetch(urlCurrent);
            const dataCurrent = await responseCurrent.json();

            const responseNext = await fetch(urlNext);
            const dataNext = await responseNext.json();
            console.log(lastIndex, lastIndex+removedNumber, 'fetchBothPage')

            const slicedDataCurrent =[...dataCurrent.filter(item=>item.id>lastIndex && item.id<=lastIndex+removedNumber)];
            const slicedDataNext =[...dataNext.slice(0, lastIndex+removedNumber - 25)];

            // console.log(slicedDataCurrent)

            set((state) => ({
              data: [...state.data, ...slicedDataCurrent, ...slicedDataNext],
              page: lastIndex+removedNumber>25? nextPage : currentPage,
              selectedItems: [],
            }));
          },


          fetchNextPage: async () => {
            const currentPage = get().page;
            const nextPage = currentPage + 1;
            const url = `https://api.punkapi.com/v2/beers?page=${nextPage}`;
        
            const response = await fetch(url);
            const data = await response.json();
            const slicedData = data.slice(0, 15);
            console.log('next')
            set((state) => ({
              data: slicedData,
              page: nextPage,
              selectedItems: []
            }));
          },
}))