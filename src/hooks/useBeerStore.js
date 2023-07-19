import { create } from 'zustand';

export const useBeerStore = create((set, get) => (
    {
        page: 1,
        data: [],
        selectedItems: [],
        singleItem: null,

        // initial data fetch
          initFetchData: async () => {
            try{
              const response = await fetch(`https://api.punkapi.com/v2/beers?page=${get().page}`);
              const data = await response.json();
              const slicedData = data.slice(0, 15);
  
              set({ data: slicedData });  
            }
            catch(e){
              console.log(e)
            }
          },

          // get sinle item when LMC
          getSingleItem: async (id) => {
            const filteredData = get().data.filter(item=> {
              return +item.id === +id})[0];

            set({ singleItem: filteredData });
          },

          // add selected item to array when RMC
          addSelectedItems: (id) =>
          set((state) => ({
            selectedItems: state.selectedItems.filter(item => item === id).length !== 0? state.selectedItems.filter(item => item !== id) : [...state.selectedItems, id],
          })),

          // clear selectedItems array
          deselectAll: () => {
            set({selectedItems: []})
          },

          // remove selected items from list
          deleteSelectedItem: () => {
            set(state => {
              const filtered = state.data.filter(item => !state.selectedItems.includes(item.id));
              return {
                data: filtered,
              };
            })
          },

          // fetch ner records from current page if it is possible
          fetchCurrentPage: async () => {
            const currentPage = get().page;
            const urlCurrent = `https://api.punkapi.com/v2/beers?page=${currentPage}`;
            const removedNumber = get().selectedItems.length;
            const lastIndex = Math.max(...get().data.map(i => i.id))
        
            const responseCurrent = await fetch(urlCurrent);
            const dataCurrent = await responseCurrent.json();

            console.log(lastIndex, lastIndex+removedNumber, 'fetchCurrentPage')

            const slicedDataCurrent =[...dataCurrent.filter(item=>item.id>lastIndex && item.id<=lastIndex+removedNumber)];

            set((state) => ({
              data: [...state.data, ...slicedDataCurrent],
              selectedItems: [],
            }));
          },

          // fetch another 15 records from the next page
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