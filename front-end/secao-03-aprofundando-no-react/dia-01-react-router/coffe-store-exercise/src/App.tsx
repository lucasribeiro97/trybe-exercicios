import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CoffeeList from './pages/CoffeeList/CoffeeList';
import Coffee from './pages/Coffee/Coffee';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/coffees' element={ <CoffeeList /> } />
          <Route path='/coffees/:coffee' element={ <Coffee/> } />
        </Routes>
    </>
  )
}

export default App
