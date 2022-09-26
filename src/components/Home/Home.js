import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      <section>
        <h1 className='Title'>Library Catalog</h1>
        <h2>Welcome to the Alchemy Computer Science Library Catalog</h2>
        <p className="home">
        Check out the amazing selection of coding material we have available for you here in {''}
          <Link to="/books">Catalog</Link>
        .
        </p>
      </section>
    </main>
  );
}

export default Home;