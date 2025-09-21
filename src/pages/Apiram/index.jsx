import { useEffect, useState } from 'react';
import { getCharacters } from '../../api/character';
import { Link } from 'react-router-dom'; // Importe o Link aqui
import './style.css'; 

function Apiram() {

    const [conteudo, setConteudo] = useState(<>CARREGANDO...</>);

    async function transformaEmLista() {
        const todosPersonagens = await getCharacters();

        return todosPersonagens.map(personagem =>
            <div className='card char' key={personagem.id}>
                <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
                <h2>{personagem.name}</h2>
                <div>
                    <span><b>Espécie:</b> {personagem.species}</span>
                    <span><b>Gênero:</b> {personagem.gender}</span>
                </div>
                <div>
                    <div className='lista-Secundaria'>
                        <b>Participações:</b> {personagem.episode.length}
                    </div>
                    <h5><b>Status:</b> {personagem.status}</h5>
                </div>
            </div>
        );
    }

    useEffect(() => {
        async function carregar() {
            setConteudo(
                await transformaEmLista()
            );
        }
        carregar();
    }, []);

    return (
    <main>
        <Link to='/'>Voltar para a Home</Link> 

        <div className='lista-principal'>
            {conteudo}
        </div>
    </main>
);
}

export default Apiram;