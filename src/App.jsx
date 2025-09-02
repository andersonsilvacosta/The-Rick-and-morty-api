
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [conteudo, setconteudo] = useState(<>CARREGANDO...</>)

  async function PegarConteudo() {
    // Vai realizar o Fetch para a api do RICK usando AXIOS
    const requestoptions = {
      method: 'GET'
    }
    const response = await fetch(
      'https://rickandmortyapi.com/api/character',
      requestoptions
    )
    if (!response.ok) {
      return []
    }
  
    const data = await response.json()
    return data.results 
  }

  async function TransformaEmLista() {
    const todosPersonagens = await PegarConteudo()


    return todosPersonagens.map(personagem =>
      <div className='card char' key={personagem.id}>
        <img src={personagem.image} alt={'Foto de ${personagem.name}'} />
        <h2>{personagem.name}</h2>
        <div>
          <span><b>Especie: </b> {personagem.species}</span>
          <span><b>Genero: </b> {personagem.gender}</span>
        </div>
        <div>
          <div className='lista-Secundaria'>
            <b>Participações: </b>{

            }
          </div>
          <h5><b>Status: </b> {personagem.status}</h5>
        </div>
      </div>
    )
  }
  useEffect(() => {
    async function Carregar() {
      setconteudo(
        await TransformaEmLista()
      )
    }
    Carregar()
  }, [])
  return (
    <>
      <Header />
      <main>
        {/* adicinar os filtro  */}
        <div className='Lista Principal'>

          {conteudo}
        </div>

      </main>
      <Footer />

    </>
  )
}

export default App
