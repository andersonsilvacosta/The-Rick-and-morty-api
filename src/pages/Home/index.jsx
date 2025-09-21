import './style.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <main>
            <h1>API do Rick and Morty!</h1>
            <p>Meu primeiro projeto React , trabalhando com importação de componentes</p>
            <Link to="/personagens">
              <button className="btn-ver-personagens">Ver Personagens</button>
            </Link>

        </main>
    );
}

export default Home;