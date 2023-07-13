import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CoffeeList from './pages/CoffeList/CoffeList';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/coffes' element={ <CoffeeList /> } />
    </Routes>
  )
}

export default App
