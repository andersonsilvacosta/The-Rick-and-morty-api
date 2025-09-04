
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Aipiram from './pages/Aipiram'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Aipiram />} />
      </Routes>
      <Footer />
    </>
  )
}

