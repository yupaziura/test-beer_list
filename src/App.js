import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';

import ListPage from './pages/ListPage/ListPage';
import BeerPage from './pages/BeerPage/BeerPage';

import './App.scss';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

  return (
 
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Routes>
        <Route path='/' element={<ListPage/>}/>
        <Route path='/beer' element={<BeerPage/>}/>
      </Routes>
  </ThemeProvider>


  );
}

export default App;
