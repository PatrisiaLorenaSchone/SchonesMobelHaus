import HomePage from './pages/Homepage'
import MenuPage from './pages/Menupage';
import PricePage from './pages/Pricepage';
import Layoutpage from './pages/Layoutpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import Impresum from './pages/Impresum';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layoutpage/>}>
            <Route index element={<HomePage />}/>
            <Route path='menu' element={<MenuPage />}/>
            <Route path='prices' element={<PricePage />}/>
            <Route path='*' element={<Errorpage/>}/>
            <Route path='impressum' element={<Impresum/>}/>
          </Route>
        </Routes >
    </BrowserRouter>
  );
}

export default App;
