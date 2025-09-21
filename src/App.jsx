import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home/index'; //página Home
import Apiram from './pages/Apiram/index'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/personagens' element={<Apiram />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;