
import { Route, Routes } from "react-router-dom";
import './App.css';
import CoinsDetails from './components/Coin-Details';
import Exchanges from './components/Exchanges';
import Coins from './components/coins';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Exchanges/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinsDetails/>}/>
    </Routes>
  );
}

export default App;
