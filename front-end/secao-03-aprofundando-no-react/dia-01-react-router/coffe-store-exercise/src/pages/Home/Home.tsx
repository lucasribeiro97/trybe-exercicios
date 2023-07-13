import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Coffeteria</h1>
      <Link to="/coffes">
        <button>Conheça nossos produtos</button>
      </Link>
    </>
  )
}

export default Home;