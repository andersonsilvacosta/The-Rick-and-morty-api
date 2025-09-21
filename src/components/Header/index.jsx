import './style.css';
import { Link } from 'react-router-dom'; 

export default function Header() { 
  return (
    <header>
        <h1>API Rick</h1>
      <Link to="/">  | Home|</Link>
      <Link to="/personagens">  | Personagens  |</Link>
    </header>
  );
}