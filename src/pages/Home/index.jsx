
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
    const conteudo = <p> </p>; 

    return (
        <>
            <Header />
            <main>
                {/* adicionar os filtros */}
                <div className='lista-principal'>
                    {conteudo}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
