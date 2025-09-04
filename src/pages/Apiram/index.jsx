import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/character'
// import './style.css'

function Apiram() {

    const [conteudo, setconteudo] = useState(<>CARREGANDO...</>)

    async function TransformaEmLista() {
        const todosPersonagens = await getCharacters()


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
        <Home />
    )

}
export default Apiram