import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CoffeeList from './pages/CoffeeList/CoffeeList';
import Coffee from './pages/Coffee/Coffee';
import NavBar from './components/NavBar/NavBar';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/coffees' element={ <CoffeeList /> } />
          <Route path='/coffees/:coffee' element={ <Coffee/> } />
        <Route path='/*' element={ <NotFound /> } />
        </Routes>
    </>
  )
}

export default App
