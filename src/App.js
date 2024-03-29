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
      <div className="app">
        <Routes>
          <Route path='/' element={<ListPage/>}/>
          <Route path={`/:id`} element={<BeerPage/>}/>
        </Routes>
      </div>
  </ThemeProvider>


  );
}

export default App;
